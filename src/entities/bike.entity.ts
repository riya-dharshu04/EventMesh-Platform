import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Booking } from './booking.entity';

export enum BikeStatus {
    AVAILABLE = 'AVAILABLE',
    BOOKED = 'BOOKED',
    IN_USE = 'IN_USE',
    OUT_OF_SERVICE = 'OUT_OF_SERVICE',
}

@Entity('bikes')
export class Bike {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    bikeNumber: string;

    @Column()
    bikeModel: string;

    @Column('text', { array: true })
    bikeImages: string[];

    @Column()
    bikeRcBook: string;

    @Column()
    bikeInsurance: string;

    @Column()
    location: string;

    @Column({ type: 'enum', enum: BikeStatus, default: BikeStatus.AVAILABLE })
    bikeStatus: string;

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