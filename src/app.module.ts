import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthModule } from './Modules/auth/auth.module';
import { BanModule } from './Modules/ban/ban.module';
import { Ban } from './Modules/ban/entities/ban.entity';
import { ChatChannelModule } from './Modules/chat_channel/chat_channel.module';
import { ChatChannelUser } from './Modules/chat_channel/entities/chat_channel-user.entity';
import { ChatChannel } from './Modules/chat_channel/entities/chat_channel.entity';
import { LevelingSystem } from './Modules/leveling_system/entities/leveling_system.entity';
import { LevelingSystemModule } from './Modules/leveling_system/leveling_system.module';
import { Message } from './Modules/message/entities/message.entity';
import { MessagesModule } from './Modules/message/message.module';
import { Permission } from './Modules/permission/entities/permission.entity';
import { PermissionModule } from './Modules/permission/permission.module';
import { Rol } from './Modules/rol/entities/rol.entity';
import { RolModule } from './Modules/rol/rol.module';
import { RolLevelingSystem } from './Modules/rol_leveling_system/entities/rol_leveling_system.entity';
import { RolLevelingSystemModule } from './Modules/rol_leveling_system/rol_leveling_system.module';
import { RolLevelingSystemService } from './Modules/rol_leveling_system/rol_leveling_system.service';
import { Server } from './Modules/server/entities/server.entity';
import { ServerModule } from './Modules/server/server.module';
import { UserType } from './Modules/user/entities/user-type.entity';
import { User } from './Modules/user/entities/user.entity';
import { UserModule } from './Modules/user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({ 
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        // driver: require('mysql2'), // Remove this line
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        // autoLoadEntities: true, // Remove this line
        entities: [Rol, RolLevelingSystem, User, Ban, ChatChannel, LevelingSystem, Message, Permission, Server, ChatChannelUser, UserType], // Add this line
        synchronize: true,
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