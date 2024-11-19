import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    constructor(username, plainTextPassword) {
        super(username, plainTextPassword);
    }
    userId: number;
}
