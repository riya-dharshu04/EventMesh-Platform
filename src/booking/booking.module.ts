import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';
import { BookingsService } from './booking.service';

@Module({
    imports:[TypeOrmModule.forFeature([Booking])],
    providers:[BookingsService],
    exports:[BookingsService]
})
export class BookingsModule{}

