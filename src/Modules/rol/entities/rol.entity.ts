import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Rol extends CommonEntity {

    @Column()
    rol: string;

    @OneToMany(() => User, (user) => user.rol)
    user: User[];

}
