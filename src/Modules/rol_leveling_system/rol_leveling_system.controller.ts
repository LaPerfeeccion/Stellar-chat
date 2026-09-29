import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRolLevelingSystemDto } from './dto/create-rol_leveling_system.dto';
import { UpdateRolLevelingSystemDto } from './dto/update-rol_leveling_system.dto';
import { RolLevelingSystemService } from './rol_leveling_system.service';

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
  const parsedId = Number(id);

  if (!parsedId || isNaN(parsedId)) {
    throw new BadRequestException('ID inválido');
  }

  return this.rolLevelingSystemService.remove(parsedId);
}

}
