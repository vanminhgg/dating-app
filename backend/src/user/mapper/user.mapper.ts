import { CreateUserDto } from "../dto/create-user.dto";
import { ResUserDto } from "../dto/response-user.dto";
import { User } from "../user.entity";

export class UserMapper {
    fromCreateUser (createUserDto : CreateUserDto) : User {
        const user  = new User()
        user.username = createUserDto.username
        user.firstname = createUserDto.firstname
        user.lastname = createUserDto.lastname
        user.email = createUserDto.email
        user.password = createUserDto.password
        user.gender = createUserDto.gender
        return user
    }
    totoResUser (user: User) : ResUserDto {
        const {password, ...resUser} = user;
        return resUser;
    }
}