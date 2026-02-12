import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserRole } from './../users/user.entity';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}