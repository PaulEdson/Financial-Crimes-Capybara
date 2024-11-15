import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateAuthorizationDto } from './dto/create-authorization.dto';
import { UpdateAuthorizationDto } from './dto/update-authorization.dto';
import {Authorization} from './entities/authorization.entity';
import {Repository} from 'typeorm';

@Injectable()
export class AuthorizationService {
   constructor(
      @InjectRepository(Authorization) private authorizationRepo : Repository<Authorization>
   )
   {}
  async create(createAuthorizationDto: CreateAuthorizationDto) {
   try {
       await this.authorizationRepo.save(
                this.authorizationRepo.create({
                  ...createAuthorizationDto
                })
       );
   } catch (e) {
      return String(e);
   }

   return "sucessfully created authorization!";
  }

  async findAll() {
     try {
         return await this.authorizationRepo.find();
     } catch (e) {
         return "error occured " + String(e);
     }
  }

  findOne(id: number) {
     return this.authorizationRepo.findOne({
        where: {
           id: id
        }
     })
  }

  update(id: number, updateAuthorizationDto: UpdateAuthorizationDto) {
    return `This action updates a #${id} authorization`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorization`;
  }
}
