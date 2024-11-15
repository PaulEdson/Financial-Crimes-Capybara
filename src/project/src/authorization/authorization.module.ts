import { Module } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Authorization} from './entities/authorization.entity';
import {AuthorizationController} from './authorization.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Authorization])],
  exports: [TypeOrmModule],
  providers: [AuthorizationService],
  controllers: [AuthorizationController]
})
export class AuthorizationModule {}
