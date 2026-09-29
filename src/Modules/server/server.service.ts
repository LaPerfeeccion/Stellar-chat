import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatChannelUser } from '../chat_channel/entities/chat_channel-user.entity';
import { ChatChannel } from '../chat_channel/entities/chat_channel.entity';
import { UserType } from '../user/entities/user-type.entity';
import { User } from '../user/entities/user.entity';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Server } from './entities/server.entity';


@Injectable()
export class ServerService {
  constructor(
  @InjectRepository(Server)
  private serverRepository: Repository<Server>,

  @InjectRepository(ChatChannel)
  private channelRepository: Repository<ChatChannel>,

  @InjectRepository(ChatChannelUser)
  private chatChannelUserRepository: Repository<ChatChannelUser>,

  @InjectRepository(UserType)
  private userTypeRepository: Repository<UserType>,
 
  @InjectRepository(User)
private userRepository: Repository<User>,

) {}


 async create(createServerDto: CreateServerDto, userId: number) {

  // 1. Crear servidor con dueño
  const server = await this.serverRepository.save({
    ...createServerDto,
    admin: { id: userId },
  });

  // 2. Crear canal general
  const channel = await this.channelRepository.save({
    name: 'general',
    type: 'text',
    server: server,
  });

  // 3. Vincular usuario al canal
  await this.chatChannelUserRepository.save({
    user: { id: userId },
    chatChannel: channel,
  });

  return server.id;
}


 findAll() {
  return this.serverRepository.find({
    relations: {
      channels: true,
      users: true
    }
  });
}


  async findOne(id: number) {
  return this.serverRepository.findOne({
    where: { id },
    relations: {
      channels: true,
    },
  });
}



  update(id: number, updateServerDto: UpdateServerDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return `This action removes a #${id} server`;
  }
  async joinServer(serverId: number, userId: number) {
  const server = await this.serverRepository.findOne({
    where: { id: serverId },
    relations: { users: true },
  });

  const user = await this.userRepository.findOne({
    where: { id: userId },
  });

  if (!server || !user) throw new Error('Not found');

  const alreadyJoined = server.users.some(u => u.id === user.id);

  if (!alreadyJoined) {
    server.users.push(user);
    await this.serverRepository.save(server);
  }

  return server;
}


}
