import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ChatChannelService } from './chat_channel.service';
import { CreateChatChannelDto } from './dto/create-chat_channel.dto';
import { UpdateChatChannelDto } from './dto/update-chat_channel.dto';

@Controller('chat-channels')
export class ChatChannelController {
  constructor(private readonly chatChannelService: ChatChannelService) {}

  @Post()
  create(@Body() createChatChannelDto: CreateChatChannelDto) {
    return this.chatChannelService.create(createChatChannelDto);
  }

  @Get()
  findAll() {
    return this.chatChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatChannelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatChannelDto: UpdateChatChannelDto) {
    return this.chatChannelService.update(+id, updateChatChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatChannelService.remove(+id);
  }
}
