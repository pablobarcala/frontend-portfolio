import { Tecnologia } from "./Tecnologia";

export interface Proyecto {
    id: number,
    nombreProyecto?: string,
    fecha?: string,
    descripcion?: string,
    link?: string,
    imagen?: string,
    github?: string,
    tecnologias?: Tecnologia[]
}