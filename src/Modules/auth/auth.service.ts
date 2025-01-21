import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthTokenPayload, AuthTokenPayloadValidateInfo, LoginResponseDto } from './dto/login.dto';
import { AuthRefreshToken } from './entities/auth.RefreshToken';

/**
 *
 */
@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService,
    @InjectRepository(AuthRefreshToken)
    private authRefreshTokenRepository: Repository<AuthRefreshToken>
  ) {}

  /**
   * Metodo para realizar el inicio de sesión
   * @param user - Datos del usuario
   * @returns - Datos y token del usuario
   */
  async login(user: User): Promise<LoginResponseDto> {
    const token = await this.generateTokenPair({ id: user.id, email: user.email });
    return { user, ...token };
  }

  /**
   * Metodo para registrar un usuario
   * @param createUser - Datos del usuario a registrar
   * @returns - Id del usuario
   */
  async register(createUser: CreateUserDto): Promise<number> {
    const decryptPassword = createUser.password;
    const hashPassword = await bcrypt.hash(decryptPassword, 10);
    createUser = { ...createUser, password: hashPassword };
    return this.userService.create(createUser);
  }

  /**
   * Metodo para validar un usuario
   * @param email - Email del usuario
   * @param password - Contraseña del usuario
   * @returns - Usuario
   */
  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  /** REFRESH TOKEN  */

  /**
   * Metodo para generar un nuevo token de refresco
   * @param userInfo - Id del usuario
   * @param currentRefreshToken - Token de refresco actual
   * @param currentRefreshTokenExpiresAt - Fecha de expiración del token de refresco actual
   * @returns - Nuevo token de refresco
   */
  async generateRefreshToken(
    userInfo: AuthTokenPayloadValidateInfo,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date
  ): Promise<string> {
    const refreshPayload: AuthTokenPayload = { id: userInfo.id, email: userInfo.email };
    const newRefreshToken = this.jwtService.sign(refreshPayload, { secret: this.configService.get<string>('JWT_REFRESH_SECRET'), expiresIn: '30d' });

    if (currentRefreshToken && currentRefreshTokenExpiresAt) {
      if (await this.isRefreshTokenBlackListed(currentRefreshToken, userInfo.id)) {
        throw new UnauthorizedException('Invalid refresh token.');
      }

      await this.authRefreshTokenRepository.insert({
        token: currentRefreshToken,
        expiration: currentRefreshTokenExpiresAt,
        userId: userInfo.id
      });
    }

    return newRefreshToken;
  }

  /**
   * Metodo para validar si un token de refresco está en la lista negra
   * @param token - Token de refresco
   * @param userId - Id del usuario
   * @returns - Validación si el token esta en la lista negra
   */
  private isRefreshTokenBlackListed(token: string, userId: number) {
    return this.authRefreshTokenRepository.existsBy({ token, userId });
  }

  /**
   * Metodo para generar un par de tokens
   * @param userInfo - Datos del usuario
   * @param currentRefreshToken - Token de refresco actual
   * @param currentRefreshTokenExpiresAt - Fecha de expiración del token de refresco actual
   * @returns - Par de tokens
   */
  async generateTokenPair(
    userInfo: AuthTokenPayloadValidateInfo,
    currentRefreshToken?: string,
    currentRefreshTokenExpiresAt?: Date
  ): Promise<Omit<LoginResponseDto, 'user'>> {
    const payload: AuthTokenPayload = { id: userInfo.id, email: userInfo.email };
    return {
      token: this.jwtService.sign(payload, { secret: this.configService.get<string>('JWT_SECRET'), expiresIn: '1m' }),
      refresh: await this.generateRefreshToken(userInfo, currentRefreshToken, currentRefreshTokenExpiresAt)
    };
  }

  /**
   *
   */
  /*@Cron(CronExpression.EVERY_DAY_AT_6AM)
  async clearExpiredRefreshTokens() {
    await this.authRefreshTokenRepository.delete({ expiresAt: LessThanOrEqual(new Date()) });
  }*/
}
