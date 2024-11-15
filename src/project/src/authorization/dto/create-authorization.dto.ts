/*
 * this class represents the arguments needed
 * to create a new authorization inside
 * of the application
 * note it is NOT an authorization, instead
 * it is a way to create one
* */
export class CreateAuthorizationDto {
   name : string;
   description : string;
}
