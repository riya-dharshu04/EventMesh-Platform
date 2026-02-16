import { BikeModule } from "./bike.module";
import { Bike } from "src/entities/bike.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class BikesService{
    constructor(
        @InjectRepository(Bike)
        private readonly bikeRepository:Repository<Bike>
    )
    {}
}