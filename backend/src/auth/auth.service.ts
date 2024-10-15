import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { ResUserDto } from "src/user/dto/response-user.dto";
import { User } from "src/user/user.entity";
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

    register(createUserDto: CreateUserDto): any {
        const user = this.userService.create(createUserDto)
        if(!user) {
            return null
        }
        const token = this.jwtService.sign({id: user.id, username: user.username})
        return {
            token
        }

    }
}