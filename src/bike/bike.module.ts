import { Module } from '@nestjs/common';
import { Bike } from '../entities/bike.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikesService } from './bike.service';
import { BikesController } from './bike.controller';
import { User } from 'src/users/user.entity';

@Module({
    imports :[TypeOrmModule.forFeature([Bike,User])],
    providers: [BikesService],
    controllers: [BikesController],
    exports:[BikesService],
})
export class BikeModule{}

