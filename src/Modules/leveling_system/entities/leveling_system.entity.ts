import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class LevelingSystem extends CommonEntity{
    
    @Column()
    level: number;

    @Column()
    points: number;

}
