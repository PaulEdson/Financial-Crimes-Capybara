/*
 * this class contains the information required to create a new user into the system
 * */
export class CreateUserDto {
   constructor(username : string,plainTextPassword : string) {
      this.username = username;
      this.plainTextPassword = plainTextPassword;
   }
   username : string;
   
   //plain text password that will be hashed later
   plainTextPassword : string;
}
