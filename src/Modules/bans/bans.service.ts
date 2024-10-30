import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBanDto } from './dto/create-ban.dto';
import { UpdateBanDto } from './dto/update-ban.dto';
import { Ban } from './entities/ban.entity';

@Injectable()
export class BansService {
  constructor(
    @InjectRepository(Ban)
    private banRepository: Repository<Ban>
  ) {}


  async create(createBanDto: CreateBanDto): Promise<number> {
    const ban = this.banRepository.create(createBanDto);
    await this.banRepository.save(createBanDto);
    return ban.id;
  }


  findAll() {
    return this.banRepository.find();
  }


  findOne(id: number) {
    return this.banRepository.findOne({where: {id}});
  }

  async update(id: number, updateBanDto: UpdateBanDto) {
   return await this.banRepository.update(id, updateBanDto)
  }

  async remove(id: number) {
    return await this.banRepository.delete(id);
  }
}
