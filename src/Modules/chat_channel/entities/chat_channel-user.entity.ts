import { Ban } from "src/Modules/ban/entities/ban.entity";
import { Message } from "src/Modules/message/entities/message.entity";
import { User } from "src/Modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ChatChannel } from "./chat_channel.entity";

@Entity()
export class ChatChannelUser extends CommonEntity{

    @ManyToOne(() => ChatChannel)
    @JoinColumn({ name: 'chatChannelId' })
    chatChannel: ChatChannel;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @OneToMany(() => Ban, (ban) => ban.chatChannelUser)
    bans: Ban[];

    @OneToMany(() => Message, (message) => message.chatChannelUser)
    messages: Message[];

}
    
