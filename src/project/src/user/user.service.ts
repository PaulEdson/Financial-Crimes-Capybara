import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // need to add FormAccess repo and AuthGroup repo later
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
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
}
