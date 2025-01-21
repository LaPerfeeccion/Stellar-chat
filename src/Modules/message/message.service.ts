import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>
  ) {}


  async create(createMessageDto: CreateMessageDto) {
    const message = await this.messageRepository.save(createMessageDto);
    return message.id;
  }

  findAll() {
    return this.messageRepository.find({
        relations:{
          chatChannelUser: {
            chatChannel: true,
            user: true
          },
        }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
