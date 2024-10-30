import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BansModule } from './modules/bans/bans.module';
import { ChatChannelsModule } from './modules/chat_channels/chat_channels.module';
import { LevelingSystemModule } from './modules/leveling_system/leveling_system.module';
import { MessagesModule } from './modules/messages/messages.module';
import { RolModule } from './modules/rol/rol.module';
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
    BansModule, ChatChannelsModule, LevelingSystemModule, MessagesModule, ServerModule, RolModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
