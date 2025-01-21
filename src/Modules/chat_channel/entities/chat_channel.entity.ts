import { Server } from "src/modules/server/entities/server.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { ChatChannelUser } from "./chat_channel-user.entity";

@Entity()
export class ChatChannel extends CommonEntity {

    @Column()
    name: string;

    @Column()
    type: string;

    @Column({ nullable: true })
    description: string;

    @Column({ default: false })
    isPrivate: boolean;

    @ManyToOne(() => Server, (server) => server.channels)
    server: Server;

    @OneToMany(() => ChatChannelUser, (chatChannelUser) => chatChannelUser.chatChannel)
    users: ChatChannelUser[]
}
