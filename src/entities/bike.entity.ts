import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity('bikes')
export class Bike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    bikeNumber: string;

    @Column()
    bikeModel: string;

    @Column('text', { array: true })
    bikePhotos: string[];

    @Column()
    bikeRcBook: string;

    @Column()
    location: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    costPerDay: number;

    @ManyToOne(() => User, (user) => user.id)
    owner: User;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}