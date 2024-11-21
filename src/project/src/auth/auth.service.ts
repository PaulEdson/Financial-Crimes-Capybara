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
   async hashPassword(plainTextPassword : string) : Promise<string> {
      //crypto-fy that password!
      return await hash(plainTextPassword + PEPPER , 10);
   }

   /*
   * takes a username and password and determines if the credentials are valid
   * then returns an access token if valid
   * */
   async validateLogin(username : string, plainTextPassword : string) : Promise<{access_token : string}> {
      let userToAuth : User = await this.userService.findUserByUsername(username);

      let peppered_password : string = plainTextPassword + PEPPER;
      let authentication : boolean = await compare(peppered_password,userToAuth.password);

      if (!authentication)
         throw new UnauthorizedException();

      const payload = {sub: userToAuth.userId, username: userToAuth.username };

      return {
         access_token: await this.jwtService.signAsync(payload)
      }


   }


}

