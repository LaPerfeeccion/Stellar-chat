import { Ban } from "src/modules/bans/entities/ban.entity";
import { ChatChannel } from "src/modules/chat_channels/entities/chat_channel.entity";
import { LevelingSystem } from "src/modules/leveling_system/entities/leveling_system.entity";
import { Message } from "src/modules/messages/entities/message.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Server extends CommonEntity {
    
    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    description: string;

    @ManyToOne(() => User, (user) => user.adminServers)
    admin: User;

    @OneToMany(() => Message, (message) => message.server)
    message: Message[];

    @OneToMany(() => LevelingSystem, (levelingSystem) => levelingSystem.server)
    levelingSystem: LevelingSystem[];

    @OneToMany(() => ChatChannel, (chatChannel) => chatChannel.server)
    chatChannel: ChatChannel[];

    @OneToMany(() => Ban, (bans) => bans.server)
    bans: Ban[];
}
