import { Module } from '@nestjs/common';
import { AuthgroupService } from './authgroup.service';
import { AuthgroupController } from './authgroup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from 'src/form/form';
import { Authgroup } from './authgroup';

@Module({
  imports:[TypeOrmModule.forFeature([Authgroup])],
  exports:[TypeOrmModule],
  controllers: [AuthgroupController],
  providers: [AuthgroupService],
})
export class AuthgroupModule {}
