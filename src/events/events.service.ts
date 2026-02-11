import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(EventEntity)
        private eventRepository: Repository<EventEntity>,
    ){}

    async createEvent(createEventDto :CreateEventDto ): Promise<EventEntity> {
        const event = this.eventRepository.create(createEventDto);
        return await this.eventRepository.save(event);
    }

    async getEvents(): Promise<EventEntity[]> {
        return await this.eventRepository.find({
            order: { createdAt: 'DESC' },
          });
        }
}


