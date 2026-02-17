import { Injectable, Inject } from '@nestjs/common';
import { app } from 'firebase-admin';

@Injectable()
export class UploadService {
  constructor(@Inject('FIREBASE_APP') private firebaseApp: app.App) {}

  async uploadFile(file: Express.Multer.File) {
    const bucket = this.firebaseApp.storage().bucket();

    const fileName = `uploads/${Date.now()}-${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    await fileUpload.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });
    await fileUpload.makePublic();

    return {
      message: 'File uploaded successfully',
      url: `https://storage.googleapis.com/${bucket.name}/${fileName}`,
    };
  }
}