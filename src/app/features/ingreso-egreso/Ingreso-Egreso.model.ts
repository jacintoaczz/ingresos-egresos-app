export class IngresoEgreso {
  descripcion: string | null;
  monto: number | null;
  tipo: string | null;
  uid?: string | null;

  constructor(dataObject: Data) {
    this.descripcion = (dataObject && dataObject.descripcion) || null;
    this.monto = (dataObject && dataObject.monto) || null;
    this.tipo = (dataObject && dataObject.tipo) || null;
    this.uid = (dataObject && dataObject.uid) || null;
  }
}

interface Data {
  descripcion: string;
  monto: number;
  tipo: string;
  uid?: string;
}
