import { Test, TestingModule } from '@nestjs/testing';
import { LevelingSystemService } from './leveling_system.service';

describe('LevelingSystemService', () => {
  let service: LevelingSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LevelingSystemService],
    }).compile();

    service = module.get<LevelingSystemService>(LevelingSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
