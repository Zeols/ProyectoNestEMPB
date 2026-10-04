import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './dto/strategies/jwt.strategies';

@Module({

  imports: [
    PassportModule,
    PrismaModule,
    JwtModule.register({
      secret: 'Mi_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],


  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
