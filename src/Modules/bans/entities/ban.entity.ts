import { Server } from "src/Modules/server/entities/server.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Ban {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({name : 'userId'})
    user: User;

    @ManyToOne(() => Server)
    @JoinColumn({name : 'serverId'})
    server: Server;

    @CreateDateColumn()
    banDate: Date; 

    @Column()
    reason: string;

    @Column({ nullable: true })
    duration: Date;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedday: Date;
}
