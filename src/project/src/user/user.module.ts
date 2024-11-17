import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [UserService],

  // will need to add FormAccessModule and AuthGroupModule to imports later
  // will need to add FormAccessService and AuthGroupService to providers later
})
export class UserModule {}
