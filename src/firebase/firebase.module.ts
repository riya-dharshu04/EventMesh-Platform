import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';

const firebaseProvider = {
  provide: 'FIREBASE_APP',
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const firebaseConfig: admin.ServiceAccount = {
      projectId: configService.get<string>('PROJECT_ID'),
      privateKey: configService.get<string>('PRIVATE_KEY')?.replace(/\\n/g, '\n'),
      clientEmail: configService.get<string>('CLIENT_EMAIL'),
    };

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        storageBucket: configService.get<string>('STORAGE_BUCKET'),
      });
    }
    return admin.app();
  },
};

@Module({
  imports: [ConfigModule],
  providers: [firebaseProvider],
  exports: [firebaseProvider], 
})
export class FirebaseModule {}
