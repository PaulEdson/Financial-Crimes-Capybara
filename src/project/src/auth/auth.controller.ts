import { Controller, HttpCode, HttpStatus, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';

@Controller('auth')
export class AuthController {
   constructor(private authService : AuthService) {}

   @HttpCode(HttpStatus.OK)
   @Post('login')
   async login(@Body() signInDto: Record<string,string>) {
      return await this.authService.validateLogin(signInDto.username,
                                                  signInDto.plainTextPassword);
   }

   @UseGuards(AuthGuard)
   @Get('secret')
   async secret(@Request() req) {
      return req.user;
   }
}
