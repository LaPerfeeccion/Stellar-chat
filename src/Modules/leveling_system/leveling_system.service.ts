import { Injectable } from '@nestjs/common';
import { CreateLevelingSystemDto } from './dto/create-leveling_system.dto';
import { UpdateLevelingSystemDto } from './dto/update-leveling_system.dto';

@Injectable()
export class LevelingSystemService {
  create(createLevelingSystemDto: CreateLevelingSystemDto) {
    return 'This action adds a new levelingSystem';
  }

  findAll() {
    return `This action returns all levelingSystem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} levelingSystem`;
  }

  update(id: number, updateLevelingSystemDto: UpdateLevelingSystemDto) {
    return `This action updates a #${id} levelingSystem`;
  }

  remove(id: number) {
    return `This action removes a #${id} levelingSystem`;
  }
}
