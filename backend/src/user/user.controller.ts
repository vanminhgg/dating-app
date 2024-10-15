import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { promises } from 'dns';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt.strategy';
import { ApiResponse } from 'src/common/common.response';

@Controller("user/")
export class UserController {
    constructor (private userService : UserService) {}

    @Get("gets")
    getAllUser (): Promise<User[]> {
        let users = this.userService.findAll();
        return users;
    }
    
    @Get("find/:id")
    async getUserById (@Param() id: number) {
        const user = await this.userService.findById(id);
        if(!user) {
            return new ApiResponse(false, {
                message: "not found!"
            })
        }
        return new ApiResponse (true, {
            data: user,
            message: ""
        })
    }

    @Get("profile")
    @UseGuards(JwtAuthGuard)
    async getProfile (@Request() req) {
        const user = await this.userService.findById(req.user?.id)
        if(!user) {
            return new ApiResponse(false, {
                message: "not found!"
            })
        }
        const {password, ...resUser} = user
        return new ApiResponse (true, {
            data: resUser,
            message: ""
        }) 
    }
}