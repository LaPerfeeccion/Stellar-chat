import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelingSystem } from './entities/leveling_system.entity';
import { LevelingSystemController } from './leveling_system.controller';
import { LevelingSystemService } from './leveling_system.service';

@Module({
  imports: [TypeOrmModule.forFeature([LevelingSystem])],
  controllers: [LevelingSystemController],
  providers: [LevelingSystemService],
})
export class LevelingSystemModule {}
