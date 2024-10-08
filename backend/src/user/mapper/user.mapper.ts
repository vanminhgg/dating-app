import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../user.entity";

export class UserMapper {
    fromCreateUser (createUserDto : CreateUserDto) : User {
        const user  = new User()
        user.username = createUserDto.username
        user.firstname = createUserDto.firstname
        user.lastname = createUserDto.lastname
        user.email = createUserDto.email
        user.password = createUserDto.password
        user.phone = createUserDto.phone
        user.dob = createUserDto.dob
        user.gender = createUserDto.gender
        return user
    }
}