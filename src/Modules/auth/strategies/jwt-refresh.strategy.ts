import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthTokenPayload, AuthTokenPayloadValidate } from '../dto/login.dto';

/**
 *
 */
@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtRefreshStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken()
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_REFRESH_SECRET')
    });
  }

  /**
   * Metodo para extraer el token de la cookie de la petición
   * @param req - Paticion
   * @returns - Token
   */
  private static extractJWT(req: Request): string | null {
    if (req.cookies && 'refresh' in req.cookies && req.cookies.refresh.length > 0) {
      return req.cookies.refresh;
    }
    return null;
  }

  /**
   * Metodo para validar un token
   * @param payload - Payload del token
   * @returns - Datos del usuario
   */
  async validate(payload: AuthTokenPayload): Promise<AuthTokenPayloadValidate> {
    return { info: { id: payload.id, email: payload.email }, expiration: new Date(payload.exp * 1000) };
  }
}
