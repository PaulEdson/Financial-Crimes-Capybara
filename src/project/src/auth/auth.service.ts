import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';
import { compare } from 'bcrypt';
import { genSalt,hash } from 'bcrypt';
import { PEPPER } from './config';

@Injectable()
export class AuthService {
   constructor(private usersService : UserService ) {}

   /*
    * takes a password and returns the hashed version of that password for safe storage
   * */
   static async hashPassword(plainTextPassword : String) : Promise<string> {
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
   * takes a username and password and properlly sets the session variables
   * */
   async signIn(username : string, password : string) : Promise<boolean> {
      try {
         let userToAuth : User = await this.usersService.findUserByUsername(username);
         let authentication : boolean = await compare(userToAuth.password,password);
         return authentication;
      }
      catch (e) {
         //TODO: ERROR HANDLING

      }
   }

}

