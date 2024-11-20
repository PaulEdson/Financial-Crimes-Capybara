import { Controller, HttpCode, HttpStatus, Post, Body } from '@nestjs/common';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
   constructor(private authService : AuthService) {}

   @HttpCode(HttpStatus.OK)
   @Post('login')
   async login(@Body() signInDto: Record<string,string>) {
      return await this.authService.validateLogin(signInDto.username,
                                                  signInDto.plainTextPassword);
   }

}
