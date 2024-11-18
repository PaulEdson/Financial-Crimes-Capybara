import { TypeOrmModule } from '@nestjs/typeorm'; //for type orm
import { Module } from '@nestjs/common'; //for common module stuff

//app imports
import { AppController } from './app.controller';
import { AppService } from './app.service';

//module imports

import { AuthgroupModule } from './authgroup/authgroup.module';
import { FormModule } from './form/form.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

//imports for authorizations
import {Authorization} from './authorization/entities/authorization.entity';
import {AuthorizationService} from './authorization/authorization.service';
import {AuthorizationController} from './authorization/authorization.controller';
import {AuthorizationModule} from './authorization/authorization.module';
import { AuthModule } from './auth/auth.module';
import {UserController} from './user/user.controller';
import {UserService} from './user/user.service';

@Module({
  imports: [UserModule, AuthgroupModule, FormModule,AuthorizationModule,
  TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'localhost',
         port: 5432,
         username: 'postgres',
         password: 'potatoParty',
         database: 'practice',
         entities: [Authorization,User],
         synchronize: true
  }),
  AuthModule,
  UserModule],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})
export class AppModule {}
