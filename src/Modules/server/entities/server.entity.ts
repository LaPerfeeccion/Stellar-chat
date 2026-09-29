import { ChatChannel } from "src/Modules/chat_channel/entities/chat_channel.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Server extends CommonEntity {

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => User, (user) => user.adminServers)
  admin: User;

  @OneToMany(() => ChatChannel, (chatChannel) => chatChannel.server)
  channels: ChatChannel[];

  @ManyToMany(() => User, user => user.servers)
@JoinTable()
users: User[];

}

