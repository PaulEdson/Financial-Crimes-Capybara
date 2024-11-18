import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*
   * creates several dummy users for testing
   * that the api is working properlly, there is probably
   * a better way to do this but here we are :)
   *
   * */
  @Post('/test')
  async testUsers() {
     await this.userService.createUser(new CreateUserDto('john','john'));
     await this.userService.createUser(new CreateUserDto('alice','alice'));
     await this.userService.createUser(new CreateUserDto('bob','bob'));
  }

  @Post('/create')
  @HttpCode(201)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
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
