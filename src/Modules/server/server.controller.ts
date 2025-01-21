import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

 
  @Post('create')
  create(@Body() createServerDto: CreateServerDto) {
    return this.serverService.create(createServerDto);
  }

  @Get('getAll')
  findAll() {
    return this.serverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServerDto: UpdateServerDto) {
    return this.serverService.update(+id, updateServerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serverService.remove(+id);
  }
}
