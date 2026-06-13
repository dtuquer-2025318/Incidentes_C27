import { Incidente, CrearIncidenteDTO, EstadoIncidente } from "./types";
import { incidentes } from "./data";


export function registrarIncidente(datos: CrearIncidenteDTO): Incidente {
    const nuevoIncidente: Incidente = {
        id: "INC-" + Math.random().toString(36).substring(2, 9),
        ...datos,
        fechaCreacion: new Date(),
        estado: 'abierto'
    };

    incidentes.push(nuevoIncidente);
    return nuevoIncidente;
}

export function actualizarEstadoIncidente(id: string, nuevoEstado: EstadoIncidente): void {
    const incidenteEncontrado = incidentes.find(inc => inc.id === id);

    if (!incidenteEncontrado) {
        console.log(`Error: No se encontro ningun incidente con el ID: ${id}`);
        return;
    }
    incidenteEncontrado.estado = nuevoEstado;
}

export function reporteMensual(mes: number): Incidente[] {
    const reportesFiltrados = incidentes.filter(incidente => 
        incidente.fechaCreacion.getMonth() === mes);

    if (reportesFiltrados.length === 0) {
        return [];
    }
    
    return reportesFiltrados;
}

