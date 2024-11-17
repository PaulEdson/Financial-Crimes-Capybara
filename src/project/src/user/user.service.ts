import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  createUser(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAllUsers() {
    return `This action returns all user`;
  }

  findUserById(id: number) {
    return `This action returns a #${id} user`;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} user`;
  }
}
