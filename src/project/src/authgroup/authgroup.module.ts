import { Module } from '@nestjs/common';
import { AuthgroupService } from './authgroup.service';
import { AuthgroupController } from './authgroup.controller';

@Module({
  controllers: [AuthgroupController],
  providers: [AuthgroupService],
})
export class AuthgroupModule {}
