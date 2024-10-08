import { Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly userSerice: UserService) {}

    @Post("/login")
    @UseGuards()
    login () : Promise<any> {
        return null
    }
}
