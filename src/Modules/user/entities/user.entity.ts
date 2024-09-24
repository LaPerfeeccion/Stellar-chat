import { Role } from "src/Modules/roles/entities/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    birthday: Date;

    @ManyToOne(() => Role)
    @JoinColumn({name : 'roleId'})
    role: Role;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedday: Date;
}
