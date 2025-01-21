import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity } from "typeorm";

Entity()
export class UserType_Permission extends CommonEntity {

    @Column()
    userTypeId: number;
    
    @Column()
    permissionId: number;

}  
