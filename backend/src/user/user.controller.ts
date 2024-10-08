import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { promises } from 'dns';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor (private readonly userService : UserService) {}

    @Get("/gets")
    getAllUser (): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post("/create")
    createUser(@Body() userdto: CreateUserDto): CreateUserDto {
        return userdto
    }
}
