import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local.strategy';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.strategy';
import { ApiResponse } from 'src/common/common.response';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post("/login")
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login (@Request() req) {
        const data = this.authService.login(req.user)
        if(!data){
            return new ApiResponse(false, {
                error: "login err!"
            }) 

        }
        return new ApiResponse(true, {
            data,
            message: "login successful!"
        }) 
    }

    @Post("/register")
    register(@Body() createUserDto: CreateUserDto) {
        const data = this.authService.register(createUserDto)
        if(!data) {
            throw new HttpException (new ApiResponse(false, {
                error: "error occurs!"
            }), HttpStatus.BAD_REQUEST)
        }
        return new ApiResponse(true, {
            data,
            message: "register successfully!"
        })
    }
}
