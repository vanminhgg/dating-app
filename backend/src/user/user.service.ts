import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserMapper } from './mapper/user.mapper';

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

    findById(id : number): Promise<User> {
        return this.usersRepository.findOneBy({id})
    }

    create(createUserDto: CreateUserDto) {
        const user = this.usersRepository.create(this.userMapper.fromCreateUser(createUserDto))
        this.usersRepository.save(user)
    }
}
