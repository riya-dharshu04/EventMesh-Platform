import { Module } from '@nestjs/common';
import { Bike } from '../entities/bike.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesService } from './bike.service';

@Module({
    imports :[TypeOrmModule.forFeature([Bike])],
    providers: [BikesService],
    exports:[BikesService],
})
export class BikeModule{}

