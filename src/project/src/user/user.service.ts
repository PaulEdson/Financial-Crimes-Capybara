import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { compare } from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {PEPPER} from 'src/auth/config';

@Injectable()
export class UserService {
  // need to add FormAccess repo and AuthGroup repo later
  constructor(
              @InjectRepository(User) 
              private repo: Repository<User>, 
              @Inject(forwardRef(() => AuthService)) //solve circular dependency issues
              private authService : AuthService) {
  }

  async createUser(createUserDto: CreateUserDto) {
     let toCreate : User = new User();
         toCreate.username = createUserDto.username;

         //base64 encode to ensure that postgress can store the data properlly
         //without changing anything about the hash
         toCreate.password = await this.authService.hashPassword(createUserDto.plainTextPassword);

         console.log(`user hashed password: ${toCreate.password}`);

         let result : boolean = await compare(createUserDto.plainTextPassword + PEPPER,toCreate.password);
         console.log(`password test ${result} `);

         await this.repo.save([toCreate]); //will crash if username is not unique
  }

  async findAllUsers(): Promise<User[]> {
    return await this.repo.find({
      relations: {
        forms: true,
        authgroups: true
      }
    }).catch(() => {
      throw new HttpException(`No Users Found!`, HttpStatus.NOT_FOUND)
    });
  }

  /*
   * returns a user based on the given username,
   * inteanded for use with authentication flows
   * */
  async findUserByUsername(uname : string) : Promise<User> {
     try {
        return await this.repo.findOneOrFail({
           where: {
              username: uname
           },
           relations: {
              forms: true,
              authgroups: true
           }
        });
     }
     catch (e) {
         throw new HttpException(`username ${uname} not found`,HttpStatus.NOT_FOUND);
     }
  }

  async findUserById(requestedId: number) {
    return await this.repo.findOneOrFail({
      where: {
        userId: requestedId
      },
      relations: {
        forms: true,
        authgroups: true
      }
    }).catch(() => {
      throw new HttpException(`User with ID ${requestedId} not found!`, HttpStatus.NOT_FOUND)
    });
  }

   /**
   * specific security centered function to properlly update a user password
   * will only update the password if the user exists, otherwise will throw an error
   *
   * TODO: it might be a good idea to force a check to the session
   * here to ensure that ONLY a user with valid permissions can update their own
   * password
   */
   async updateUserPassword(username : string,password : string) {
      try {
         let user : User = await this.findUserByUsername(username)
         user.password = await this.authService.hashPassword(password);
         await this.repo.save([user]);
      }
      catch (e) {
         //TODO: a LOT of error handling :p
      }
   }

   async deleteUser(id: number): Promise <DeleteResult> {
    return await this.repo.delete(id);
  }
}
