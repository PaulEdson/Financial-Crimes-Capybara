import { AuthGroup } from "src/authgroup/authgroup";
import {Form} from  "src/form/form"
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;


    @ManyToOne(()=>AuthGroup, (authgroup => authgroup.users))
    authgroup: AuthGroup
    // authGroup: AuthGroup;

    //Many to many connection to form table
    @ManyToMany(()=>Form, form => form.users)
    //creating join table (only one side of the connection needs this)
    @JoinTable()
    //forms variable to store connections
    forms : Form[];
    
}
