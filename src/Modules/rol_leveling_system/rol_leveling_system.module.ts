import { Module } from '@nestjs/common';
import { RolLevelingSystemService } from './rol_leveling_system.service';
import { RolLevelingSystemController } from './rol_leveling_system.controller';

@Module({
  controllers: [RolLevelingSystemController],
  providers: [RolLevelingSystemService],
})
export class RolLevelingSystemModule {}
