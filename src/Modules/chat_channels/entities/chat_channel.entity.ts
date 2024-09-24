import { Server } from "src/Modules/server/entities/server.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ChatChannel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @ManyToOne(() => Server)
    @JoinColumn({name : 'serverId'})
    server: Server;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedday: Date;

    @Column({ nullable: true })
    description: string;

    @Column({ default: false })
    isPrivate: boolean;
}
