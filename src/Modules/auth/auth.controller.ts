import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { Request } from 'express';
import { Public } from 'src/confirmate/Public';
import { JwtRefreshGuard } from 'src/guards/jwt-refresh.guard';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { AuthInterceptor } from 'src/interceptor/auth.interceptor';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login.dto';

/**
 *
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * @returns el servicio de Login
   * @param request recuesta
   * @param loginDto caracteres que se usan para que el servicio login se pueda ejecutar
   */
  @Public()
  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(AuthInterceptor)
  @UseGuards(LocalAuthGuard)
  async login(@Req() request: Request): Promise<LoginResponseDto> {
    return this.authService.login(request.user as User);
  }
  /**
   *@returns creacion de un usuario nuevo en registrer
   * @param createUserDto
   * @param createUser crear un nuevo usuario
   */
  @Public()
  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  @UseInterceptors(AuthInterceptor)
  register(@Body() createUserDto: CreateUserDto): Promise<number> {
    return this.authService.register(createUserDto);
  }

  /**
   *@returns genera 2 tokens
   * @param req envia la exprresRequest
   */
  @Post('refresh-token')
  @UseGuards(JwtRefreshGuard)
  @UseInterceptors(AuthInterceptor)
  refreshToken(@Req() req: Request): Promise<Omit<LoginResponseDto, 'user'>> {
    if (!req['user']) {
      throw new UnauthorizedException();
    }
    return this.authService.generateTokenPair(
      req.user['info'],
      req.cookies['refresh'],
      new Date(req.user['expiration'])
    );
  }

  /**
   *
   * @param req request
   */
  @Post('logout')
  logout(@Req() req: Request): void {
    req.res.clearCookie('token');
    req.res.clearCookie('refresh');
    return;
  }
}
