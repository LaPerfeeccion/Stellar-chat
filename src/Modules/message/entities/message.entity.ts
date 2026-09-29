import { ChatChannelUser } from "src/Modules/chat_channel/entities/chat_channel-user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Message extends CommonEntity {
   
    @Column()
    content: string;
    
    @Column({default: false})
    isEdited: boolean;

   @ManyToOne(() => ChatChannelUser, (ccu) => ccu.messages)
@JoinColumn({ name: 'chatChannelUserId' })
chatChannelUser: ChatChannelUser;


    
}
