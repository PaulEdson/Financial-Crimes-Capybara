import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthgroupModule } from './authgroup/authgroup.module';

@Module({
  imports: [UserModule, AuthgroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
