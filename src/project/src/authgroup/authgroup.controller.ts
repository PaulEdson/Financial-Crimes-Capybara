//import { Controller } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AuthgroupService } from './authgroup.service';
import { Authgroup } from './authgroup';
import { DeleteResult } from 'typeorm';

@Controller('authgroup')
export class AuthgroupController {

  constructor(private readonly authgroupService: AuthgroupService) {}

  //retrive all Authgroups
  @Get()
  findAll(): Promise<Authgroup[]> {
    return this.authgroupService.findAll();
  }

  //retrive Authgroup by ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Authgroup> {
    return this.authgroupService.findOne(id);
  }

  //create a new Authgroup
  @Post()
  create(@Body() newAuthgroup: Authgroup) {
    return this.authgroupService.create(newAuthgroup)
  }

  //update an Authgroup
  @Put(':id')
  update(@Param('id') routeId: number, @Body() authgroupToUpdate: Authgroup) {
    return this.authgroupService.update(routeId, authgroupToUpdate)
  }

  //delete an Authgroup
  @Delete(':id')
  remove(@Param('id') id:number): Promise<DeleteResult> {
    return this.authgroupService.remove(id);
  }
}
