import { Controller, Post, Get, Body, UseGuards,Request } from "@nestjs/common";
import { RegisterBikeDto } from './bike.dto';
import { BikesService } from "./bike.service";
import { AuthGuard } from '@nestjs/passport';

@Controller('bikes')
export class BikesController {
    constructor(private readonly bikesService: BikesService) { }

    @Post('register')
    @UseGuards(AuthGuard('jwt'))
    registerBikes(@Body() dto: RegisterBikeDto,@Request() req,) {
        return this.bikesService.registerBike(dto,req.user.userId);
    }

    @Get('list')
    getBikes() {
        return this.bikesService.getBikes();
    }
}
