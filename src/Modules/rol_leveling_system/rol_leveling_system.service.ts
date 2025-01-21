import { Injectable } from '@nestjs/common';
import { CreateRolLevelingSystemDto } from './dto/create-rol_leveling_system.dto';
import { UpdateRolLevelingSystemDto } from './dto/update-rol_leveling_system.dto';

@Injectable()
export class RolLevelingSystemService {
  create(createRolLevelingSystemDto: CreateRolLevelingSystemDto) {
    return 'This action adds a new rolLevelingSystem';
  }

  findAll() {
    return `This action returns all rolLevelingSystem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rolLevelingSystem`;
  }

  update(id: number, updateRolLevelingSystemDto: UpdateRolLevelingSystemDto) {
    return `This action updates a #${id} rolLevelingSystem`;
  }

  remove(id: number) {
    return `This action removes a #${id} rolLevelingSystem`;
  }
}
