import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatChannelsController } from './chat_channels.controller';
import { ChatChannelsService } from './chat_channels.service';
import { ChatChannel } from './entities/chat_channel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatChannel])],
  controllers: [ChatChannelsController],
  providers: [ChatChannelsService],
})
export class ChatChannelsModule {}
