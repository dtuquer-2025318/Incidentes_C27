export type EstadoIncidente = 'abierto' | 'enProgreso' | 'resuelto';

export type Prioridad = 'baja' | 'media' | 'alta';

export type CrearIncidenteDTO = Omit<Incidente, 'id' | 'fechaCreacion' | 'estado'>;

export type ActualizarIncidenteDTO = Partial<Omit<Incidente, 'id'>>;

export interface Incidente {
    readonly id: string,
    titulo: string,
    descripcion: string,
    reporte: string,
    nombre: string,
    prioridad: Prioridad,
    estado: EstadoIncidente,
    fechaCreacion: Date,
}