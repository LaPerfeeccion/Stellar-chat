import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Server } from "./server.entity";

@Entity()
export class ServerUser extends CommonEntity{

    @ManyToOne(() => Server)
    @JoinColumn({ name: 'serverId' })
    server: Server;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;
}
    
