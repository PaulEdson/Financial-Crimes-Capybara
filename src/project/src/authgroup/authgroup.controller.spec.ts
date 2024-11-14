import { Test, TestingModule } from '@nestjs/testing';
import { AuthgroupController } from './authgroup.controller';
import { AuthgroupService } from './authgroup.service';

describe('AuthgroupController', () => {
  let controller: AuthgroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthgroupController],
      providers: [AuthgroupService],
    }).compile();

    controller = module.get<AuthgroupController>(AuthgroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
