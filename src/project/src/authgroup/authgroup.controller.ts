import { Controller } from '@nestjs/common';
import { AuthgroupService } from './authgroup.service';

@Controller('authgroup')
export class AuthgroupController {
  constructor(private readonly authgroupService: AuthgroupService) {}
}
