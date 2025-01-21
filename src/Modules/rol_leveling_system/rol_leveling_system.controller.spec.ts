import { Test, TestingModule } from '@nestjs/testing';
import { RolLevelingSystemController } from './rol_leveling_system.controller';
import { RolLevelingSystemService } from './rol_leveling_system.service';

describe('RolLevelingSystemController', () => {
  let controller: RolLevelingSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolLevelingSystemController],
      providers: [RolLevelingSystemService],
    }).compile();

    controller = module.get<RolLevelingSystemController>(RolLevelingSystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
