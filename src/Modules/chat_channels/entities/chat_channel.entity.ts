import { LevelingSystem } from "src/modules/leveling_system/entities/leveling_system.entity";
import { Message } from "src/modules/messages/entities/message.entity";
import { Server } from "src/modules/server/entities/server.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

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

    @OneToMany(() => Message, (message) => message.channel)
    message: Message[];

    @OneToMany(() => LevelingSystem, (levelingSystem) => levelingSystem.channel)
    levelingSystem: LevelingSystem[];

    @ManyToOne(() => Server, (server) => server.chatChannel)
    server: Server;
}
