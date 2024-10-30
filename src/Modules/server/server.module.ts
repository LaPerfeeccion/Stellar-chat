import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerUser } from './entities/server-user.entity';
import { Server } from './entities/server.entity';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [TypeOrmModule.forFeature([Server, ServerUser])],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
