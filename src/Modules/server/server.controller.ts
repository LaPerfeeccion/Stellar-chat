import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ChatChannelService } from '../chat_channel/chat_channel.service';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { ServerService } from './server.service';

@Controller('server')
export class ServerController {
  constructor(
    private readonly serverService: ServerService,
    private readonly chatChannelService: ChatChannelService
  ) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
  @Body() createServerDto: CreateServerDto,
  @Req() req
) {
  const userId = req.user.info.id;   // viene del JWT
  return this.serverService.create(createServerDto, userId);
}

@UseGuards(JwtAuthGuard)
@Post(':id/join')
joinServer(@Param('id') id: number, @Req() req) {
  return this.serverService.joinServer(id, req.user.id);
}


  @UseGuards(JwtAuthGuard)
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
