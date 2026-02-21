import { Controller, Get, Post, UseGuards, Req, Patch } from '@nestjs/common';
import { BookingsService } from './booking.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { BookingStatus } from '../entities/booking.entity';

@Controller('bookings')
@UseGuards(AuthGuard('jwt'))
export class BookingController {
    constructor(private readonly bookingService: BookingsService) { }

    @Post()
    createBooking() { }

    @Get()
    getAllBookings() {

    }
}