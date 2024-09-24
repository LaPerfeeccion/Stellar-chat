import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LevelingSystemService } from './leveling_system.service';
import { CreateLevelingSystemDto } from './dto/create-leveling_system.dto';
import { UpdateLevelingSystemDto } from './dto/update-leveling_system.dto';

@Controller('leveling-system')
export class LevelingSystemController {
  constructor(private readonly levelingSystemService: LevelingSystemService) {}

  @Post()
  create(@Body() createLevelingSystemDto: CreateLevelingSystemDto) {
    return this.levelingSystemService.create(createLevelingSystemDto);
  }

  @Get()
  findAll() {
    return this.levelingSystemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.levelingSystemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevelingSystemDto: UpdateLevelingSystemDto) {
    return this.levelingSystemService.update(+id, updateLevelingSystemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.levelingSystemService.remove(+id);
  }
}
