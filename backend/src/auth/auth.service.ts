import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ResUserDto } from "src/user/dto/response-user.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    validateUser (username: string, password: string): Promise<ResUserDto> {
        const user = this.userService.validateUser(username, password)

        if(!user) {
            return null
        }

        return user;
    }
    login (req: any) : any {
        const token = this.jwtService.sign(req)
        return {
            token
        }
    }
}