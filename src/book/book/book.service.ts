import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private bookRepository: BookRepository,
  ) {}
  async createBook(title: string, author: string, category: string) {
    const result = await this.bookRepository.createBook(
      title,
      author,
      category,
    );
    console.log(result);
    return result;
  }

  async getBooks() {
    return await this.bookRepository.find();
  }
}
