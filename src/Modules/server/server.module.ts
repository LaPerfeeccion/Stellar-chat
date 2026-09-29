import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ChatChannelModule } from '../chat_channel/chat_channel.module';
import { ChatChannelUser } from '../chat_channel/entities/chat_channel-user.entity';
import { ChatChannel } from '../chat_channel/entities/chat_channel.entity';
import { UserType } from '../user/entities/user-type.entity';
import { User } from '../user/entities/user.entity';
import { Server } from './entities/server.entity';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [TypeOrmModule.forFeature([
  Server,
  ChatChannel,
  ChatChannelUser,
  UserType,
  User
]),
ChatChannelModule,
],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
