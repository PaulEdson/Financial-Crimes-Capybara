import { Authgroup } from "src/authgroup/authgroup";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    // @OneToMany()
    // formAccess: FormAccess[];

    // @ManyToOne()
    // authGroup: AuthGroup;

}
