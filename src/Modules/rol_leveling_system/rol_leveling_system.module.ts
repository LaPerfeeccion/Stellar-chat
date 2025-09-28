import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelingSystem } from 'src/Modules/leveling_system/entities/leveling_system.entity';
import { Rol } from 'src/Modules/rol/entities/rol.entity';
import { RolLevelingSystem } from './entities/rol_leveling_system.entity';
import { RolLevelingSystemController } from './rol_leveling_system.controller';
import { RolLevelingSystemService } from './rol_leveling_system.service';

@Module({
 imports: [TypeOrmModule.forFeature([RolLevelingSystem, Rol, LevelingSystem])],
  controllers: [RolLevelingSystemController],
  providers: [RolLevelingSystemService],
  exports: [RolLevelingSystemService],
})
export class RolLevelingSystemModule {}
