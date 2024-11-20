import { forwardRef, Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { compare } from 'bcrypt';
import { genSalt,hash } from 'bcrypt';
import { PEPPER } from './config';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
   constructor(
      @Inject(forwardRef(() => UserService))
      private userService : UserService,
      private jwtService : JwtService 
   ) {}

   /*
    * takes a password and returns the hashed version of that password for safe storage
   * */
   async hashPassword(plainTextPassword : String) : Promise<string> {
      //crypto-fy that password!
      try {
         let salt : string = await genSalt();
         return await hash(plainTextPassword + PEPPER , salt);
      }
      catch (e) {
         //TODO: handle errors
         return e;
      }
   }

   /*
   * takes a username and password and determines if the credentials are valid
   * */
   async login(username : string, password : string) : Promise<{access_token : string}> {
      try {
         let userToAuth : User = await this.userService.findUserByUsername(username);
         let authentication : boolean = await compare(userToAuth.password,password);
         
         if (!authentication)
            throw new UnauthorizedException();

         const payload = {sub: userToAuth.userId, username: userToAuth.username };

         return {
            access_token: await this.jwtService.signAsync(payload)
         }

      }
      catch (e) {
         //default to locked doors not open ones
         throw new UnauthorizedException();
      }
   }


}

