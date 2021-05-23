export class User {
  public nombre: string | null;
  public email: string | null | undefined;
  public uid: string | null | undefined;

  constructor(userObject: ObjectData) {
    this.nombre = (userObject && userObject.nombre) || null;
    this.email = (userObject && userObject.email) || null;
    this.uid = (userObject && userObject.uid) || null;
  }
}

interface ObjectData {
  uid: string;
  email: string;
  nombre: string;
}
