import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Villian {

    @PrimaryGeneratedColumn()
    id!: number

    @Column('text')
    name!: string

    @Column('text')
    alte!: string

}
