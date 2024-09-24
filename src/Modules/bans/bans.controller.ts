import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BansService } from './bans.service';
import { CreateBanDto } from './dto/create-ban.dto';
import { UpdateBanDto } from './dto/update-ban.dto';

@Controller('bans')
export class BansController {
  constructor(private readonly bansService: BansService) {}

  @Post()
  create(@Body() createBanDto: CreateBanDto) {
    return this.bansService.create(createBanDto);
  }

  @Get()
  findAll() {
    return this.bansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBanDto: UpdateBanDto) {
    return this.bansService.update(+id, updateBanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bansService.remove(+id);
  }
}
