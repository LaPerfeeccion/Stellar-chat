import { Test, TestingModule } from '@nestjs/testing';
import { LevelingSystemController } from './leveling_system.controller';
import { LevelingSystemService } from './leveling_system.service';

describe('LevelingSystemController', () => {
  let controller: LevelingSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelingSystemController],
      providers: [LevelingSystemService],
    }).compile();

    controller = module.get<LevelingSystemController>(LevelingSystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
