import { Entity, Column, PrimaryGeneratedColumn, IsNull } from 'typeorm';

@Entity({name: "user"})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  dob: string;

  @Column()
  gender: string;

  @Column({default:""})
  job: string;

  @Column({default: "https://www.svgrepo.com/show/452030/avatar-default.svg"})
  avt: string;

  @Column({default:""})
  hometown: string;

  @Column({name : "current_residence", default: ""})
  currentResidence: string;

  @Column({default:""})
  school: string;

  @Column({default:0})
  height: number;

  @Column({default: ""})
  bio: string;

  @Column({default:""})
  looking: string;

  @Column({name : "create_date", default: ""})
  createDate: string;

}