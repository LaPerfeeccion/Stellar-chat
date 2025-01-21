import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 *
 */
@Entity()
export class AuthRefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @Column()
  expiration: Date;

  @Column()
  userId: number;
}
