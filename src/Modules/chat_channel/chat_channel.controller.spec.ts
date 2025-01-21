import { Test, TestingModule } from '@nestjs/testing';
import { ChatChannelController } from './chat_channel.controller';
import { ChatChannelService } from './chat_channel.service';

describe('ChatChannelController', () => {
  let controller: ChatChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatChannelController],
      providers: [ChatChannelService],
    }).compile();

    controller = module.get<ChatChannelController>(ChatChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
