import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local.strategy';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt.strategy';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post("/login")
    @UseGuards(LocalAuthGuard)
    login (@Request() req) {
        return this.authService.login(req.user)
    }

    @Get("/profile")
    @UseGuards(JwtAuthGuard)
    getProfile (@Request() req) {
        return req.user
    }
}
