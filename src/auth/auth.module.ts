import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from './../users/user.module';
import { JwtStrategy } from './jwt.strategy';
import { OwnerModule } from '../owner/owner.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    OwnerModule,
    JwtModule.register({
      secret: 'supersecretkey', // later move to .env
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}