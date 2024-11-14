import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthgroupModule } from './authgroup/authgroup.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { FormModule } from './form/form.module';

@Module({
  imports: [UserModule, AuthgroupModule, AuthorizationModule, FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
