import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  @HttpCode(200)
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  @HttpCode(200)
  findUserById(@Param('id') id: number) {
    return this.userService.findUserById(+id);
  }

  @Patch('/update/:id')
  @HttpCode(200)
  updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(+id, updateUserDto);
  }

  @Delete('/delete/:id')
  @HttpCode(204)
  removeUser(@Param('id') id: number) {
    return this.userService.removeUser(+id);
  }
}
