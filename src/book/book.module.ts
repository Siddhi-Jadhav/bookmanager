import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookRepository } from './book/book.repository';
import { BookResolver } from './book/book.resolver';
import { BookService } from './book/book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  providers: [BookService, BookResolver],
})
export class BookModule {}
