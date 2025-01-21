import { PartialType } from '@nestjs/mapped-types';
import { CreateRolLevelingSystemDto } from './create-rol_leveling_system.dto';

export class UpdateRolLevelingSystemDto extends PartialType(CreateRolLevelingSystemDto) {}
