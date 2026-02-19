import { IsString,IsEnum ,IsNumber, IsNotEmpty, IsArray, ArrayNotEmpty, IsOptional, IsUUID } from "class-validator";
import { Bike } from "src/entities/bike.entity";
import { BikeStatus } from "src/entities/bike.entity";

export class RegisterBikeDto{

    @IsString()
    @IsNotEmpty()
    bikeNumber:string;

    @IsString()
    bikeModel:string;
    
    @IsArray()
    @ArrayNotEmpty()
    @IsString({each:true})
    bikeImages:string[];

    @IsString()
    @IsNotEmpty()
    bikeRcBook:string;

    @IsString()
    @IsNotEmpty()
    bikeInsurance:string;

    @IsString()
    location:string;

    @IsEnum(BikeStatus)
    @IsOptional()
    bikeStatus?:BikeStatus;

    @IsNumber()
    @IsNotEmpty()
    costPerDay:number;

    @IsUUID()
    ownerId: string;

}