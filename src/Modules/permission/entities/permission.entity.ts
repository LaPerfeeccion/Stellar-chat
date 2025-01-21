import { UserType } from "src/Modules/user/entities/user-type.entity";
import { CommonEntity } from "src/shared/entity/common.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

Entity()
export class Permission extends CommonEntity {

    @Column()
    name: string;

    @ManyToMany(() => UserType)
    @JoinTable({
      name: 'usertype_permission',
      joinColumn: {
        name: 'permission',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'FK_usertype_permission_permission'
      },
      inverseJoinColumn: {
        name: 'user_type',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'FK_usertype_permission_user_type'
      }
    })
    userTypes: UserType[];
}
