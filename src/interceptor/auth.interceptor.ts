import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { LoginResponseDto } from 'src/modules/auth/dto/login.dto';
import { User } from 'src/modules/user/entities/user.entity';
/**
 *
 */
export class AuthInterceptor implements NestInterceptor {
  /**
   *@returns cookies como respuestas
   * @param context trae la información que esta usando
   * @param next  trae la función que esta ejecutandose
   */
  intercept(context: ExecutionContext, next: CallHandler<LoginResponseDto>): Observable<User> {
    return next.handle().pipe(
      map(({ user, token, refresh }) => {
        const response = context.switchToHttp().getResponse();
        if (token) {
          response.cookie('token', token, { httpOnly: true });
          response.cookie('refresh', refresh, { httpOnly: true });
        }

        return user;
      })
    );
  }
}
