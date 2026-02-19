import { Controller, Post, Get, Body } from "@nestjs/common";
import { RegisterBikeDto } from './bike.dto';
import { BikesService } from "./bike.service";

@Controller('bikes')
export class BikesController {
    constructor(private readonly bikesService: BikesService) { }

    @Post('register')
    registerBikes(@Body() dto: RegisterBikeDto) {
        return this.bikesService.registerBike(dto);
    }

    @Get('list')
    getBikes() {
        return this.bikesService.getBikes();
    }
}
