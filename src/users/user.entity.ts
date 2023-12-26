import { Report } from '../reports/report.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ default: true })
  admin: boolean;

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

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];
}
