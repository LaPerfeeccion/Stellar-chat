import { Server } from "src/modules/server/entities/server.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Ban extends CommonEntity {
    
    @CreateDateColumn()
    banDate: Date; 

    @Column()
    reason: string;

    @Column({ nullable: true })
    duration: Date;

    @ManyToOne(() => User, (user) => user.bans)
    user: User;

    @ManyToOne(() => Server, (server) => server.bans)
    server: Server;
}
