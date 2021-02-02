import { TypeCellar } from "../typeCellar/type-cellar";

export class Cellar {
    id: number;
    nombre: string;
    estado: boolean;
    fecha_control: Date;
    updated_at: Date;
    created_at: Date;
    tipo: TypeCellar;
}
