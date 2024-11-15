import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './form';
import { Repository } from 'typeorm';

@Injectable()
export class FormService {
  constructor(@InjectRepository(Form) private repo: Repository<Form>){}
  create(createFormDto: CreateFormDto) {
    return 'This action adds a new form';
  }

  async findAll(): Promise<Form[]> {
    return await this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
