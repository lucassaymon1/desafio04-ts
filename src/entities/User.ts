import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {randomUUID} from "crypto"

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  user_id: string
  @Column({nullable: false})
  name: string
  @Column({nullable: false})
  email: string
  @Column({nullable: false})
  password: string
  @Column()
  balance: number

  constructor(
    name: string,
    email: string,
    password: string,
    balance: number 
  ){
    this.user_id = randomUUID()
    this.name = name
    this.email = email
    this.password = password
    this.balance = balance
  }
}