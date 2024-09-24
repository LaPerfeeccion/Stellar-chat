import { PartialType } from '@nestjs/mapped-types';
import { CreateLevelingSystemDto } from './create-leveling_system.dto';

export class UpdateLevelingSystemDto extends PartialType(CreateLevelingSystemDto) {}
