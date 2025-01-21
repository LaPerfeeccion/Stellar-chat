import { Test, TestingModule } from '@nestjs/testing';
import { RolLevelingSystemService } from './rol_leveling_system.service';

describe('RolLevelingSystemService', () => {
  let service: RolLevelingSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolLevelingSystemService],
    }).compile();

    service = module.get<RolLevelingSystemService>(RolLevelingSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
