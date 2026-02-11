import { Controller, Post, Body, Get } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { EventEntity } from './event.entity';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}

    @Post()
    async createEvent(@Body() createEventDto: CreateEventDto): Promise<EventEntity> {
        return await this.eventsService.createEvent(createEventDto);
    }

    @Get()
    async getEvents(): Promise<EventEntity[]> {
        return await this.eventsService.getEvents();
    }
}
