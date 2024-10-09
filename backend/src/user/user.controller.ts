import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { promises } from 'dns';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor (private readonly userService : UserService) {}

    @Get("/gets")
    async getAllUser (): Promise<User[]> {
        let users =  await this.userService.findAll();
        return users;
    }

    @Post("/create")
    async createUser(@Body() userdto: CreateUserDto): Promise<CreateUserDto> {
        this.userService.create(userdto);
        return userdto
    }
    
    @Get("/:id")
    async getUserById (@Param() id: number): Promise<User> {
        return this.userService.findById(id);
    }
}