import { Authgroup } from "src/authgroup/authgroup";
import { Column, Entity,ManyToMany,PrimaryGeneratedColumn } from "typeorm";

/*
 * this class represents an authorazation inside of the primary application
 * authorizations are stored in this table, and checked elsewhere inside the system
 * when auth needs to occure
* */

@Entity()
export class Authorization {
   @PrimaryGeneratedColumn()
   id : number;

   @Column()
   name : string;

   @Column()
   description : string;

   @ManyToMany(()=>Authgroup, authgroup => authgroup.authorizations)
   authgroups : Authgroup[]

   
}
