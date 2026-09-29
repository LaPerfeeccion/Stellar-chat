import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UpdateMessageDto } from './dto/update-message.dto';
import { MessageService } from './message.service';

@UseGuards(AuthGuard('jwt'))
@Controller('messages')
export class MessageController {
  constructor(private readonly messagesService: MessageService) {}

@UseGuards(JwtAuthGuard)
@Post('create')
create(@Body() dto, @Req() req) {
  return this.messagesService.create(dto, req.user.id);
}
  @Get('getAll')
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(+id, updateMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagesService.remove(+id);
  }

  @Get('channel/:id')
  findByChannel(@Param('id') id: string) {
    return this.messagesService.findByChannel(+id);
  }

}
