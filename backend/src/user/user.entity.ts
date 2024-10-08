import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  job: string;

  @Column({default: "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/3e6ad78f37934e9584cc0fe78ea35eae~tplv-nhvfeczskr-1:250:0.webp?lk3s=44acef4b&x-expires=1741319756&x-signature=ZekxFwgVOppLn%2FpY4qj4WNWFd%2Fg%3D"})
  avt: string;

  @Column()
  hometown: string;

  @Column({name : "current_residence"})
  currentResidence: string;

  @Column()
  school: string;

  @Column()
  height: number;

  @Column({default: ""})
  bio: string;

  @Column()
  looking: string;

  @Column({name : "create_date"})
  createDate: string;

}