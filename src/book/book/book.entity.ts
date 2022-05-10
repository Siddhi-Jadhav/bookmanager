import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Book')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  author: string;

  @Column('varchar')
  category: string;
}
