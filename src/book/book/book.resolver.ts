import { BookType } from './book.type';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BookService } from './book.service';

@Resolver((of) => BookType)
export class BookResolver {
  constructor(private bookService: BookService) {}

  @Query((returns) => [BookType])
  async books() {
    return await this.bookService.getBooks();
  }

  @Mutation((returns) => BookType)
  async createBook(
    @Args('title') title: string,
    @Args('author') author: string,
    @Args('category') category: string,
  ) {
    return await this.bookService.createBook(title, author, category);
  }
}
