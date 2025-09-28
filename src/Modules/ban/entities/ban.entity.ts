import { ChatChannelUser } from "src/Modules/chat_channel/entities/chat_channel-user.entity";
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

    @ManyToOne(() => ChatChannelUser, (chatChannelUser) => chatChannelUser.bans)
    chatChannelUser: ChatChannelUser;

}