import { Module,forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FormModule } from 'src/form/form.module';
import { FormService } from 'src/form/form.service';
import {AuthModule} from 'src/auth/auth.module';

@Module({
  imports: [
     TypeOrmModule.forFeature([User]),
     FormModule,
     forwardRef(()=>AuthModule)
  ],
  exports: [TypeOrmModule,UserService],
  controllers: [UserController],
  providers: [UserService, FormService],

  // will need to add FormAccessModule and AuthGroupModule to imports later
  // will need to add FormAccessService and AuthGroupService to providers later
})
export class UserModule {}
