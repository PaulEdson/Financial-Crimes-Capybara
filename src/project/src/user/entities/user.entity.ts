import { Authgroup } from "src/authgroup/authgroup";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    username: string;

    @Column()
    password: string;

    // @OneToMany()
    // formAccess: FormAccess[];

    // @ManyToOne()
    // authGroup: AuthGroup;

}
