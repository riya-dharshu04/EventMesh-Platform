import { Module } from '@nestjs/common';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';

@Module({
    imports:[ FirebaseModule],
    controllers:[ UploadController ],
    providers:[ UploadService ],
})
export class UploadModule{}
