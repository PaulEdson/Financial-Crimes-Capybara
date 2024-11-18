import { User } from "src/user/user";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

//table entity containing form information for each report
@Entity()
export class Form {
    //Primary key
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
