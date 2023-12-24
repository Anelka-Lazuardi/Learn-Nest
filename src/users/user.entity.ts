import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted new Id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated  Id ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed  Id ', this.id);
  }
}
