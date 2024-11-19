import { Module } from '@nestjs/common';
import { AuthgroupService } from './authgroup.service';
import { AuthgroupController } from './authgroup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from 'src/form/form';
import { AuthGroup } from './authgroup';

@Module({
  imports:[TypeOrmModule.forFeature([AuthGroup])],
  exports:[TypeOrmModule],
  controllers: [AuthgroupController],
  providers: [AuthgroupService],
})
export class AuthgroupModule {}
