import { TypeOrmModule } from '@nestjs/typeorm'; //for type orm
import { Module } from '@nestjs/common'; //for common module stuff

//app imports
import { AppController } from './app.controller';
import { AppService } from './app.service';

//module imports
import { UserModule } from './user/user.module';
import { AuthgroupModule } from './authgroup/authgroup.module';
import { FormModule } from './form/form.module';

//imports for authorizations
import {Authorization} from './authorization/entities/authorization.entity';
import {AuthorizationService} from './authorization/authorization.service';
import {AuthorizationController} from './authorization/authorization.controller';
import {AuthorizationModule} from './authorization/authorization.module';

@Module({
  imports: [UserModule, AuthgroupModule, FormModule,AuthorizationModule,
  TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'localhost',
         port: 5432,
         username: 'postgres',
         password: 'potatoParty',
         database: 'practice',
         entities: [Authorization],
         synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
