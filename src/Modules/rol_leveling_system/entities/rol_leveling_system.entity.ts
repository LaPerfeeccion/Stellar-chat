import { LevelingSystem } from "src/modules/leveling_system/entities/leveling_system.entity";
import { Rol } from "src/modules/rol/entities/rol.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class RolLevelingSystem extends CommonEntity {
    
    @Column()
    minPoints: number;

    @ManyToOne(() => Rol)
    rol: Rol;

    @ManyToOne(() => LevelingSystem)
    levelingSystem: LevelingSystem;
}
