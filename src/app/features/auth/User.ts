export class User {
  public nombre: string;
  public email: string | null | undefined;
  public uid: string | undefined;

  constructor(nombre: string, email: string, uid: string) {
    this.nombre = nombre;
    this.email = email;
    this.uid = uid;
  }
}
