import { Test, TestingModule } from '@nestjs/testing';
import { ChatChannelService } from './chat_channel.service';

describe('ChatChannelsService', () => {
  let service: ChatChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatChannelService],
    }).compile();

    service = module.get<ChatChannelService>(ChatChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
