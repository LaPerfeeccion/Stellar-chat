import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { Server } from './entities/server.entity';

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(Server)
    private serverRepository: Repository<Server>
  ) {}


  async create(createServerDto: CreateServerDto) {
    const user = await this.serverRepository.save(createServerDto);
    return user.id;
  }

  findAll() {
    return this.serverRepository.find({
        relations:{
          channels: true
        }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} server`;
  }

  update(id: number, updateServerDto: UpdateServerDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return `This action removes a #${id} server`;
  }
}
