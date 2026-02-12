import {
    Injectable,
    UnauthorizedException,
    BadRequestException,
  } from '@nestjs/common';
  import { UsersService } from './../users/user.service';
  import { JwtService } from '@nestjs/jwt';
  import * as bcrypt from 'bcrypt';
  import { RegisterDto } from './../auth/register.dto';
  
  @Injectable()
  export class AuthService {
    constructor(
      private usersService: UsersService,
      private jwtService: JwtService,
    ) {}
  
    async register(dto: RegisterDto) {
      const existingUser = await this.usersService.findByEmail(dto.email);
      if (existingUser) {
        throw new BadRequestException('Email already exists');
      }
  
      const hashedPassword = await bcrypt.hash(dto.password, 10);
  
      const user = await this.usersService.create({
        username: dto.username,
        email: dto.email,
        password: hashedPassword,
        role: dto.role,
      });
  
      return {
        message: 'User registered successfully',
        userId: user.id,
      };
    }
  
    async login(email: string, password: string) {
      const user = await this.usersService.findByEmail(email);
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