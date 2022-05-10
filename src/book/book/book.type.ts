import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Book')
export class BookType {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  category: string;
}
