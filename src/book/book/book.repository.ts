import { EntityRepository, Repository } from 'typeorm';
import { BookEntity } from './book.entity';

@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity> {
  async createBook(title: string, author: string, category: string) {
    const book = new BookEntity();
    (book.title = title), (book.author = author), (book.category = category);
    this.save(book);
    return book;
  }
}
