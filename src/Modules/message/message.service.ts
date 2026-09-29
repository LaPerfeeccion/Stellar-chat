import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatChannelUser } from '../chat_channel/entities/chat_channel-user.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,

    @InjectRepository(ChatChannelUser)
    private chatChannelUserRepository: Repository<ChatChannelUser>,
  ) {}

  // Crear mensaje
 async create(dto: CreateMessageDto, userId: number) {

  let chatChannelUser = await this.chatChannelUserRepository.findOne({
    where: {
      user: { id: userId },
      chatChannel: { id: dto.channelId },
    },
  });

  // 👇 AUTO-JOIN si no existe
  if (!chatChannelUser) {
    chatChannelUser = await this.chatChannelUserRepository.save({
      user: { id: userId },
      chatChannel: { id: dto.channelId },
    });
  }

  const message = this.messageRepository.create({
    content: dto.content,
    chatChannelUser,
  });

  const saved = await this.messageRepository.save(message);
  return saved.id,
  console.log('USER ID FROM JWT:', userId),
  console.log('CHANNEL ID:', dto.channelId);

}


  // Obtener todos los mensajes
  findAll() {
    return this.messageRepository.find({
      relations: {
        chatChannelUser: {
          chatChannel: true,
          user: true,
        },
      },
    });
  }

  findOne(id: number) {
    return this.messageRepository.findOne({
      where: { id },
      relations: {
        chatChannelUser: {
          chatChannel: true,
          user: true,
        },
      },
    });
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return this.messageRepository.update(id, updateMessageDto);
  }

  remove(id: number) {
    return this.messageRepository.delete(id);
  }

  // Mensajes por canal
  async findByChannel(channelId: number) {
    return this.messageRepository.find({
      where: {
        chatChannelUser: {
          chatChannel: { id: channelId },
        },
      },
      relations: {
        chatChannelUser: {
          user: true,
          chatChannel: true,
        },
      },
      order: { createdAt: 'ASC' },
    });
  }
}
