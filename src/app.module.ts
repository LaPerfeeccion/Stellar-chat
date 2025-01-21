import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthModule } from './Modules/auth/auth.module';
import { BanModule } from './Modules/ban/ban.module';
import { ChatChannelModule } from './Modules/chat_channel/chat_channel.module';
import { LevelingSystemModule } from './modules/leveling_system/leveling_system.module';
import { MessagesModule } from './modules/message/message.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RolModule } from './modules/rol/rol.module';
import { RolLevelingSystemModule } from './modules/rol_leveling_system/rol_leveling_system.module';
import { RolLevelingSystemService } from './modules/rol_leveling_system/rol_leveling_system.service';
import { ServerModule } from './modules/server/server.module';
import { UserModule } from './modules/user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: false,
      }),
      inject: [ConfigService]
    }),
    UserModule,
    BanModule, ChatChannelModule, LevelingSystemModule, MessagesModule, ServerModule, RolModule, AuthModule, PermissionModule, RolLevelingSystemModule],
  controllers: [AppController],
  providers: [AppService,{ 
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
}, RolLevelingSystemService],
})
export class AppModule {}
