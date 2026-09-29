import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatChannelUser } from '../chat_channel/entities/chat_channel-user.entity';
import { Message } from './entities/message.entity';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, ChatChannelUser])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessagesModule {}
