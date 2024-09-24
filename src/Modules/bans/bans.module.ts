import { Module } from '@nestjs/common';
import { BansService } from './bans.service';
import { BansController } from './bans.controller';

@Module({
  controllers: [BansController],
  providers: [BansService],
})
export class BansModule {}
