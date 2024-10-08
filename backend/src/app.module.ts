import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';

const typeormModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'datingapp',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
})

@Module({
  imports: [ UserModule
            ,AuthModule
            ,typeormModule],
  controllers: [],
  providers: [],
})  
export class AppModule {}
