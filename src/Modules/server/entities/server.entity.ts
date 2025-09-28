import { ChatChannel } from "src/Modules/chat_channel/entities/chat_channel.entity";
import { User } from "src/Modules/user/entities/user.entity";
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

    @OneToMany(() => ChatChannel, (chatChannel) => chatChannel.server)
    channels: ChatChannel[];
}
