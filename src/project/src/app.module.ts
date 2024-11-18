import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthgroupModule } from './authgroup/authgroup.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { FormModule } from './form/form.module';
import { FormController } from './form/form.controller';
import { FormService } from './form/form.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user';
import { Form } from './form/form';
import { ConfigModule } from '@nestjs/config';
import { Authorization } from './authorization/authorization';
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
      synchronize: true, //if this is set to true, any changes made in the app will affect your schema
      entities: [User, Form]
    }),
    UserModule, AuthgroupModule, AuthorizationModule, FormModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService]
})
export class AppModule {}
