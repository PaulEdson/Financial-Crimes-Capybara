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
import { Authorization } from './authorization/authorization';
import { Authgroup } from './authgroup/authgroup';
import { UserController } from './user/user.controller';
import { AuthgroupController } from './authgroup/authgroup.controller';
import { UserService } from './user/user.service';
import { AuthgroupService } from './authgroup/authgroup.service';
import { AuthorizationService } from './authorization/authorization.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Romans12:!',
      database: 'Capybara',
      synchronize: true, //if this is set to true, any changes made in the app will affect your schema
      entities: [User, Form]
    }),
    UserModule, AuthgroupModule, AuthorizationModule, FormModule],
  controllers: [AppController, FormController],
  providers: [AppService, FormService]
})
export class AppModule {}
