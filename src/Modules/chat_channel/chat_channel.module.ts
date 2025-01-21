import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatChannelController } from './chat_channel.controller';
import { ChatChannelService } from './chat_channel.service';
import { ChatChannelUser } from './entities/chat_channel-user.entity';
import { ChatChannel } from './entities/chat_channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatChannel, ChatChannelUser])],
  controllers: [ChatChannelController],
  providers: [ChatChannelService],
})
export class ChatChannelModule {}
