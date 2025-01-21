import { Permission } from 'src/Modules/permission/entities/permission.entity';
import { CommonEntity } from 'src/shared/entity/common.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { User } from './user.entity';

/**
 *
 */
@Entity()
export class UserType extends CommonEntity {

  @Column()
  name: string;


  @OneToMany(() => User, (user) => user.userType)
  users: User[];

  @ManyToMany(() => UserType)
    @JoinTable({
      name: 'usertype_permission',
      joinColumn: {
        name: 'usertypeId',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'FK_usertype_permission_user_type'
      },
      inverseJoinColumn: {
        name: 'permissionId',
        referencedColumnName: 'id',
        foreignKeyConstraintName: 'FK_usertype_permission_permission'
      }
    })
    permissions: Permission[];
}
