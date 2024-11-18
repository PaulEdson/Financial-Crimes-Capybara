import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { Form } from './form';

//controller for form table/entity
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post()
  create(@Body() createForm: Form) {
    return this.formService.create(createForm);
  }

  @Get('/GetAll')
  findAll(): Promise<Form[]> {
    return this.formService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Form> {
    return this.formService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormDto: Form) {
    return this.formService.update(+id, updateFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formService.remove(+id);
  }
}
