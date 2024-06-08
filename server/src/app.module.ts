import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AuthModule } from './auth/auth.module';
import { TransactionModule } from './transaction/transaction.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [UserModule, CategoryModule, AuthModule, TransactionModule, ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   // useFactory: (configService: ConfigService) => ({
    //   //   type: 'postgres',
    //   //   host: configService.get('DB_HOST'),
    //   //   port: configService.get('DB_PORT'),
    //   //   username: configService.get('DB_USER_PG'),
    //   //   password: configService.get('DB_PASSWORD'),
    //   //   database: configService.get('DB_NAME'),
    //   //   synchronize: true,
    //   //   entities: [__dirname + '/**/*.entity{.js, .ts}'],
    //   // }),
    //   // inject: [ConfigService]
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: 'localhost',
    //     port: 5432,
    //     username: 'postgres',
    //     password: '123456',
    //     database: 'budget',
    //     synchronize: true,
    //     entities: [__dirname + '/**/*.entity{.js, .ts}'],
    //   }),
    //   inject: [ConfigService]
    // })
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USER', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', '123456'),
        database: configService.get<string>('DB_NAME', 'budget'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
      }),
      inject: [ConfigService]
    })

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
