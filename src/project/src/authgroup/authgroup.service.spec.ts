import { Test, TestingModule } from '@nestjs/testing';
import { AuthgroupService } from './authgroup.service';

describe('AuthgroupService', () => {
  let service: AuthgroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthgroupService],
    }).compile();

    service = module.get<AuthgroupService>(AuthgroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
