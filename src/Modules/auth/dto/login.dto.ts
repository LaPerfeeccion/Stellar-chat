import { PickType } from '@nestjs/mapped-types';
import { User } from 'src/Modules/user/entities/user.entity';

/**
 *
 */
export class LoginDto extends PickType(User, ['email', 'password']) {}

/**
 *
 */
export class LoginResponseDto {
  user: User;
  token: string;
  refresh: string;
}

/**
 *
 */
export class AuthTokenPayload {
  id: number;
  email: string;
  exp?: number;
}

/**
 *
 */
// export class AuthRefreshTokenPayload extends AuthTokenPayload {
//   expiration?: number;
// }

/**
 *
 */
export class AuthTokenPayloadValidate {
  info: AuthTokenPayloadValidateInfo;
  expiration?: Date;
}

/**
 *
 */
export class AuthTokenPayloadValidateInfo {
  id: number;
  email: string;
}
