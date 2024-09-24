import { Module } from '@nestjs/common';
import { LevelingSystemService } from './leveling_system.service';
import { LevelingSystemController } from './leveling_system.controller';

@Module({
  controllers: [LevelingSystemController],
  providers: [LevelingSystemService],
})
export class LevelingSystemModule {}
