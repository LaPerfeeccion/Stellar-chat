import { ChatChannel } from "src/Modules/chat_channels/entities/chat_channel.entity";
import { Server } from "src/Modules/server/entities/server.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => User)
    @JoinColumn({name : 'userId'})
    user: User;

    @ManyToOne(() => Server)
    @JoinColumn({name : 'serverId'})
    server: Server;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => ChatChannel)
    @JoinColumn({name : 'channelId'})
    channel: ChatChannel;

    @Column({default: false})
    isEdited: boolean;

    @UpdateDateColumn()
    updatedday: Date;
}
