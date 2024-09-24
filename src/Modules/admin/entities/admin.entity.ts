import { User } from "src/Modules/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({name : 'userId'})
    user: User;

    @Column()
    level: string;

    @CreateDateColumn()
    assignedAt: Date;

    @CreateDateColumn()
    createAt: Date; 

    @UpdateDateColumn()
    updatedday: Date;
}
