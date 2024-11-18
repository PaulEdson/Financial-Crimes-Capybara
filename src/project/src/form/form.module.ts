import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from './form';

@Module({
  imports:[TypeOrmModule.forFeature([Form])],
  exports:[TypeOrmModule],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
