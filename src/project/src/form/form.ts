import { User } from "src/user/user";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Form {
    @PrimaryGeneratedColumn()
    FormId: number;

    @Column()
    Header: string;

    @Column()
    Body: string;

    @Column()
    Category: string;

    @Column()
    CreationDate: string;

    //Need to implement this later--
    //@ManyToMany()
    //Users: User[]
}
