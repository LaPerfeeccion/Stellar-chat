import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatChannelUser } from '../chat_channel/entities/chat_channel-user.entity';
import { CreateChatChannelDto } from './dto/create-chat_channel.dto';
import { UpdateChatChannelDto } from './dto/update-chat_channel.dto';
import { ChatChannel } from './entities/chat_channel.entity';

@Injectable()
export class ChatChannelService {

  constructor(
    @InjectRepository(ChatChannel)
    private chatChannelRepository: Repository<ChatChannel>,

     @InjectRepository(ChatChannelUser)
  private chatChannelUserRepository: Repository<ChatChannelUser>
  ) {}

  create(createChatChannelDto: CreateChatChannelDto) {
    return this.chatChannelRepository.save(createChatChannelDto);
  }

  findAll() {
    return this.chatChannelRepository.find();
  }

  findOne(id: number) {
    return this.chatChannelRepository.findOne({ where: { id } });
  }

  update(id: number, updateChatChannelDto: UpdateChatChannelDto) {
    return this.chatChannelRepository.update(id, updateChatChannelDto);
  }

  remove(id: number) {
    return this.chatChannelRepository.delete(id);
  }

  // ⭐ FUNCIÓN CLAVE
  async joinChannel(userId: number, channelId: number) {

    const exists = await this.chatChannelUserRepository.findOne({
      where: {
        user: { id: userId },
        chatChannel: { id: channelId },
      },
    });

    if (exists) return exists;

    return this.chatChannelUserRepository.save({
      user: { id: userId },
      chatChannel: { id: channelId },
    });
  }
}
