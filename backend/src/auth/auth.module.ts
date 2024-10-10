import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
const jwtModule = JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_KEY'),
    signOptions: { expiresIn: '600s' },
})
})

@Module({
  imports: [UserModule, PassportModule,jwtModule],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy, JwtStrategy]
})
export class AuthModule {}
