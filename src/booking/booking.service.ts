import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Booking } from "src/entities/booking.entity";

@Injectable()
export class BookingsService{
    constructor(
        @InjectRepository(Booking)
        private readonly bookingsRepository: Repository <Booking>
    ){}
}