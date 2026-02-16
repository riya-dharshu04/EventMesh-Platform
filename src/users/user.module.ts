import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { User } from './user.entity';
import { Booking } from '../entities/booking.entity'
import { Bike } from '../entities/bike.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User,Booking,Bike])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}