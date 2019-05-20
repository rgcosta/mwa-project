export class User {

    private name: string;

    constructor(
      private firstName: string,
      private lastName: string,
      private email: string,
      public picture: string,
      private questions: any[],
      private answers: any[],
      private following: any[],
      private admin: boolean,
    ){
      this.name = `${firstName} ${lastName}`;
    }
}