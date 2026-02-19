import { BikeModule } from "./bike.module";
import { Bike } from "src/entities/bike.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { RegisterBikeDto } from "./bike.dto";
import { User } from "src/users/user.entity";

@Injectable()
export class BikesService {
    constructor(
        @InjectRepository(Bike)
        private readonly bikeRepository: Repository<Bike>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async registerBike(dto: RegisterBikeDto) {
        const owner = await this.userRepository.findOne({ where: { id: dto.ownerId } });
        if (!owner) throw new Error('Owner not found');
        const bike = this.bikeRepository.create({
            bikeNumber: dto.bikeNumber,
            bikeModel: dto.bikeModel,
            bikeImages: dto.bikeImages,
            bikeRcBook: dto.bikeRcBook,
            bikeInsurance: dto.bikeInsurance,
            location: dto.location,
            bikeStatus: dto.bikeStatus,
            costPerDay: dto.costPerDay,
            owner: owner
        });
        await this.bikeRepository.save(bike);

        return {
            message: 'Bike registered successfully',
            data: bike
        }
    }

    async getBikes() {
        const bikes = await this.bikeRepository.find({ relations: ['owner'] })
        return { bikes }
    }
}