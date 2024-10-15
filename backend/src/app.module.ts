import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';


const typeormModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASS'),
    database: 'datingapp',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
})
})


@Module({
  imports: [ UserModule
            ,AuthModule
            ,typeormModule
            ,ConfigModule.forRoot({
              isGlobal: true,
            })
        ],
  controllers: [],
  providers: [],
})  
export class AppModule {}
