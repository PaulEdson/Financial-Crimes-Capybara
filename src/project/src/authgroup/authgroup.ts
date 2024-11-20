import { Authorization } from "src/authorization/entities/authorization.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Authgroup {
    //Primary key
    @PrimaryGeneratedColumn()
    AuthgroupId: number;

    @Column()
    Header: string;

    @Column()
    Body: string;

    @Column()
    Category: string;

    //One to many connection to authgroup table
    @OneToMany(()=>User, user => user.authgroup)
    //creating users connection variable
    users: User[]

    //Many to many connection to Authorization table
    @ManyToMany(()=>Authorization, authorization => authorization.authgroups)
    //creating users connection variable
    @JoinTable()
    //creating authorizations connection variable (used to store lixt of authorizations for the authgroup)
    authorizations: Authorization[];
}

