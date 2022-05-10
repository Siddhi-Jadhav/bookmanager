import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { TypeOrmConfiguration } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfiguration),
    BookModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
