import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('/create')
  @HttpCode(201)
  async createUser(@Body() createUserDto: CreateUserDto) {
      await this.userService.createUser(createUserDto);
  }

  @Get()
  @HttpCode(200)
  findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  @HttpCode(200)
  findUserById(@Param('id') requestedId: number) {
    return this.userService.findUserById(+requestedId);
  }

  @Put('/update/:username')
  @HttpCode(200)
  updateUserPassword(@Param('username') username: string, @Body() UpdateUserDto) {
    return this.userService.updateUserPassword(username, UpdateUserDto);
  }

  @Delete('/delete/:id')
  @HttpCode(204)
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(+id);
  }

}
