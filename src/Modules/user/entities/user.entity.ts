import { Ban } from "src/modules/bans/entities/ban.entity";
import { LevelingSystem } from "src/modules/leveling_system/entities/leveling_system.entity";
import { Message } from "src/modules/messages/entities/message.entity";
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
    roleId: number;

    @ManyToOne(() => Rol, (rol) => rol.user)
    rol: Rol;

    @OneToMany(() => Ban, (ban) => ban.user)
    bans: Ban[];

    @OneToMany(() => Server, (server) => server.admin)
    adminServers: Server[];

    @ManyToOne(() => UserType, (usertype) => usertype.users)
    userType: UserType;

    @OneToMany(() => Message, (message) => message.user)
    message: Message[];

    @OneToMany(() => LevelingSystem, (levelingSystem) => levelingSystem.user)
    levelingSystem: LevelingSystem[];

  }
