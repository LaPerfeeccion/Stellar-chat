import { ChatChannelUser } from "src/Modules/chat_channel/entities/chat_channel-user.entity";
import { Rol } from "src/modules/rol/entities/rol.entity";
import { Server } from "src/modules/server/entities/server.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { UserType } from "./user-type.entity";

@Entity()
export class User extends CommonEntity {

    @Column({ unique: true })
    username: string;
  
    @Column()
    password: string;

    @Column()
    birthday: Date;

    @Column({ unique: true })
    email: string;

    @Column()
    rolId: number;

    @ManyToOne(() => Rol, (rol) => rol.users)
    rol: Rol;

    @OneToMany(() => Server, (server) => server.admin)
    adminServers: Server[];

    @ManyToOne(() => UserType, (usertype) => usertype.users)
    userType: UserType;

    @OneToMany(() => ChatChannelUser, (chatChannelUser) => chatChannelUser.user)
    channels: ChatChannelUser[]

  }
