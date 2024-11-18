import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './form';
import { Repository } from 'typeorm';

@Injectable()
export class FormService {
  constructor(@InjectRepository(Form) private repo: Repository<Form>){}

  async create(createFormDto: Form): Promise<Form> {
    await this.repo.exists({where:{FormId: createFormDto.FormId}}).then(exists => {
      if (exists){
        throw new HttpException(`Form ID ${createFormDto.FormId} already exists`, HttpStatus.BAD_REQUEST)
      }
    })
    return await this.repo.save(createFormDto);
  }

  async findAll(): Promise<Form[]> {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOneOrFail({where:{FormId:id}});
  }

  async update(id: number, updateFormDto: Form) {
    if (id != updateFormDto.FormId){
      throw new HttpException(`route id ${id} and body id ${updateFormDto.FormId} do not match`, HttpStatus.BAD_REQUEST)
    }
    await this.repo.exists({where:{FormId: updateFormDto.FormId}}).then(exists => {
      if (!exists){
        throw new HttpException(`Form ID ${updateFormDto.FormId} does not exists`, HttpStatus.BAD_REQUEST)
      }
    })
    return await this.repo.save(updateFormDto);
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }
}
