import { TypeOrmModule } from '@nestjs/typeorm'; //for type orm
import { Module } from '@nestjs/common'; //for common module stuff

//app imports
import { AppController } from './app.controller';
import { AppService } from './app.service';

//module imports

import { AuthgroupModule } from './authgroup/authgroup.module';
import { FormModule } from './form/form.module';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { Form } from './form/form';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthorizationModule } from './authorization/authorization.module';

import { ConfigModule } from '@nestjs/config';
import { Authgroup } from './authgroup/authgroup';
import { UserController } from './user/user.controller';
import { AuthgroupController } from './authgroup/authgroup.controller';
import { UserService } from './user/user.service';
import { AuthgroupService } from './authgroup/authgroup.service';
import { AuthorizationService } from './authorization/authorization.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: true,
      synchronize: true, //if this is set to true, any changes made in the app will affect your schema
      entities: [User, Form]
    }),
    UserModule, AuthgroupModule, AuthorizationModule, FormModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService]
})
export class AppModule {}
