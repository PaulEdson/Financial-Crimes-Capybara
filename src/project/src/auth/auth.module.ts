import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from 'src/user/user.module';
import {JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './config';

@Module({
   imports:[
      forwardRef(()=>UserModule),
      JwtModule.register(
      {
         global: true,
         secret: jwtConstants.SECRET,
         signOptions: { expiresIn: '60s' }
      }
   )],
   controllers: [ AuthController ],
   providers: [ AuthService ],
   exports: [ AuthService ]
})
export class AuthModule {}
