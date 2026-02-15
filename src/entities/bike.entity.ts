import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Booking } from './booking.entity';

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

    @OneToMany(() => Booking, (booking) => booking.bike)
    bookings: Booking[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}