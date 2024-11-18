import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  // need to add FormAccess repo and AuthGroup repo later
  constructor(@InjectRepository(User) private repo: Repository<User>,private authService : AuthService) {}

  async createUser(createUserDto: CreateUserDto) {
     let toCreate : User = new User();
     try {
         toCreate.username = createUserDto.username;
         toCreate.password = await this.authService.hashPassword(createUserDto.plainTextPassword);
         await this.repo.save([toCreate]); //will crash if username is not unique
     } catch (e) {
         //TODO: catch the error bro
     }
  }

  async findAllUsers(): Promise<User[]> {
    return await this.repo.find({
      // relations: {
      //   formAccess: true,
      //   authGroup: true
      // }
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
      // relations: {
      //   formAccess: true,
      //   authGroup: true
      // }
    }).catch(() => {
      throw new HttpException(`User with ID ${requestedId} not found!`, HttpStatus.NOT_FOUND)
    });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} user`;
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
}
