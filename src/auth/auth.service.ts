import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
  } from '@nestjs/common';
  import { UsersService } from './../users/user.service';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  import { RegisterDto } from './../auth/register.dto';
  import { OwnerService } from '../owner/owner.service';
  
  @Injectable()
  export class AuthService {
    constructor(
      private usersService: UsersService,
      private ownersService: OwnerService,
      private jwtService: JwtService,
    ) {}
  
    async register(dto: RegisterDto) {
      const existingUser = await this.usersService.findUserByEmail(dto.email);
      if (existingUser) {
        throw new BadRequestException('Email already exists');
      }
  
      const hashedPassword = await bcrypt.hash(dto.password, 10);
  
      const user = await this.usersService.createUser({
        username: dto.username,
        email: dto.email,
        password: hashedPassword,
        role: dto.role,
      });
  
      return {
        message: 'Registered successfully',
        userId: user.id,
      };
    }
  
    async login(email: string, password: string) {
      const user = await this.usersService.findUserByEmail(email);
      if (!user) throw new UnauthorizedException('Invalid email');
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new UnauthorizedException('Invalid password');
  
      const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
      };
  
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }