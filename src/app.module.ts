import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { BansModule } from './modules/bans/bans.module';
import { ChatChannelsModule } from './modules/chat_channels/chat_channels.module';
import { LevelingSystemModule } from './modules/leveling_system/leveling_system.module';
import { MessagesModule } from './modules/messages/messages.module';
import { RolesModule } from './modules/roles/roles.module';
import { ServerModule } from './modules/server/server.module';
import { UserModule } from './modules/user/user.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AdminModule, BansModule, ChatChannelsModule, LevelingSystemModule, MessagesModule, RolesModule, ServerModule, UserModule],
})
export class AppModule {}
