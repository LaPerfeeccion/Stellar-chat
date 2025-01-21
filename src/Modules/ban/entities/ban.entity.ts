import { ChatChannelUser } from "src/Modules/chat_channel/entities/chat_channel-user.entity";

import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, CreateDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Ban extends CommonEntity {
    
    @CreateDateColumn()
    banDate: Date; 
    
    @Column()
    chatChannelUserId: number;

    @Column()
    reason: string;
    
    @Column({ nullable: true })
    duration: Date;


    // esto hace que las relaciones o informacion que esta en chatChannel pase a Ban para mostrar de los servidores de donde el usuario fue baneado y cuantas veces see baneo en los diferentes servidores
    @ManyToOne(() => ChatChannelUser)
    chatChannelUser: ChatChannelUser;

}
