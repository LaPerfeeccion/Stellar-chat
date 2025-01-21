import { RolLevelingSystem } from "src/Modules/rol_leveling_system/entities/rol_leveling_system.entity";
import { User } from "src/modules/user/entities/user.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Rol extends CommonEntity {

    @Column()
    rol: string;

    @OneToMany(() => User, (user) => user.rol)
    users: User[];
    
    @OneToMany(() => RolLevelingSystem, (rolLevelingSystem) => rolLevelingSystem.rol)
    rolLevelingSystem: RolLevelingSystem[];
    
}
