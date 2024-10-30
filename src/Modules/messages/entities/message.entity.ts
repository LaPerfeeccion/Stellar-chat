import { ChatChannel } from "src/modules/chat_channels/entities/chat_channel.entity";
import { Server } from "src/modules/server/entities/server.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Message extends CommonEntity {
   
    @Column()
    content: string;

    
    @ManyToOne(() => User, (user) => user.message)
    user: User;

    
    @ManyToOne(() => Server, (server) => server.message)
    server: Server;

    
    @Column({default: false})
    isEdited: boolean;

    @ManyToOne(() => ChatChannel, (channel) => channel.message)
    channel: ChatChannel;
}
