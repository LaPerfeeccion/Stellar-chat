import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { BanController } from './ban.controller';
import { BanService } from './ban.service';
import { Ban } from './entities/ban.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ban, User])],
  controllers: [BanController],
  providers: [BanService],
})
export class BanModule {}
