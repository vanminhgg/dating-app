import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './mapper/user.mapper';
import { ResUserDto } from './dto/response-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private userMapper: UserMapper
      ) {}

    findAll() : Promise<User[]>  {
        return this.usersRepository.find()  
    }

    async findById(id : number): Promise<User> {
        const user = await this.usersRepository.findOneBy({id})
        return user
    } 

    create(createUserDto: CreateUserDto): User {
        if (this.usersRepository.findOneBy({username: createUserDto.username})) {
            return null
        }
        if(this.usersRepository.findBy({email: createUserDto.email})) {
            return null
        }
        const user = this.usersRepository.create(this.userMapper.fromCreateUser(createUserDto))
        if(!user)
        {
            return null;
        }
        this.usersRepository.save(user)
        return user
    }

    async validateUser(username: string, pass: string) : Promise<ResUserDto> {
        const user = await this.usersRepository.findOneBy({username, password: pass})
        
        if(!user) {
            return null
        }
        
        const {password, ...resUser} = user

        return resUser

    }
}
