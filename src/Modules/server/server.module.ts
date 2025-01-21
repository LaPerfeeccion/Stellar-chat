import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Server } from './entities/server.entity';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [TypeOrmModule.forFeature([Server])],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
