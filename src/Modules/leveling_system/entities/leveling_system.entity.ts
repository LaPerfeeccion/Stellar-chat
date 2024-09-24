import { ChatChannel } from "src/Modules/chat_channels/entities/chat_channel.entity";
import { Server } from "src/Modules/server/entities/server.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class LevelingSystem {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User)
    @JoinColumn({name : 'userId'})
    user: User;

    @ManyToOne(() => Server)
    @JoinColumn({name : 'serverId'})
    server: Server;

    @ManyToOne(() => ChatChannel)
    @JoinColumn({name : 'channelId'})
    channel: ChatChannel;

    @Column()
    level: number;

    @Column()
    points: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedday: Date;
}
