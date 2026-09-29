import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolLevelingSystemDto } from './dto/create-rol_leveling_system.dto';
import { UpdateRolLevelingSystemDto } from './dto/update-rol_leveling_system.dto';
import { RolLevelingSystem } from './entities/rol_leveling_system.entity';


@Injectable()
export class RolLevelingSystemService {
  constructor(
    @InjectRepository(RolLevelingSystem)
    private readonly repo: Repository<RolLevelingSystem>, // 👈 CLAVE
  ) {}

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

  async remove(id: number) {
    if (!id || isNaN(id)) {
      console.error('❌ ID inválido en remove:', id);
      return;
    }

    return this.repo.delete(id);
  }
}
