import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolLevelingSystemService } from './rol_leveling_system.service';
import { CreateRolLevelingSystemDto } from './dto/create-rol_leveling_system.dto';
import { UpdateRolLevelingSystemDto } from './dto/update-rol_leveling_system.dto';

@Controller('rol-leveling-system')
export class RolLevelingSystemController {
  constructor(private readonly rolLevelingSystemService: RolLevelingSystemService) {}

  @Post()
  create(@Body() createRolLevelingSystemDto: CreateRolLevelingSystemDto) {
    return this.rolLevelingSystemService.create(createRolLevelingSystemDto);
  }

  @Get()
  findAll() {
    return this.rolLevelingSystemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolLevelingSystemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolLevelingSystemDto: UpdateRolLevelingSystemDto) {
    return this.rolLevelingSystemService.update(+id, updateRolLevelingSystemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolLevelingSystemService.remove(+id);
  }
}
