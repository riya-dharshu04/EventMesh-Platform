import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  OWNER = 'OWNER',
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string; 

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CUSTOMER,
  })
  role: UserRole;
}