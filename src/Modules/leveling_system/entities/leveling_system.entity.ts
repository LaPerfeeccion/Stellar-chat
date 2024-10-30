import { ChatChannel } from "src/modules/chat_channels/entities/chat_channel.entity";
import { Server } from "src/modules/server/entities/server.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class LevelingSystem extends CommonEntity{
    
    @Column()
    level: number;

    @Column()
    points: number;

    @ManyToOne(() => User, (user) => user.levelingSystem)
    user: User;
    
    @ManyToOne(() => Server, (server) => server.levelingSystem)
    server: Server;

    @ManyToOne(() => ChatChannel, (channel) => channel.levelingSystem)
    channel: ChatChannel;
}
