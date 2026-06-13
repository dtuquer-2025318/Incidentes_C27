import { Incidente } from "./types";

export const incidentes: Incidente[] = [
    { 
        id: "INAV-0001", 
        titulo: "Problema del C27", 
        descripcion: "Está fallando una computadora del salón C27, no enciende la pantalla.", 
        reporte: "Mal funcionamiento de hardware", 
        nombre: "Alumno", 
        prioridad: "baja", 
        estado: "abierto", 
        fechaCreacion: new Date("2026-06-15")
    },
    { 
        id: "INAV-0002", 
        titulo: "Proyector sin señal", 
        descripcion: "El cable HDMI del proyector principal está dañado y da pantalla azul.", 
        reporte: "Problema de conectividad", 
        nombre: "Profesor", 
        prioridad: "media", 
        estado: "enProgreso", 
        fechaCreacion: new Date("2026-06-20")
    },
    { 
        id: "INAV-0003", 
        titulo: "Cerradura rota", 
        descripcion: "La puerta trasera del salón C27 no se puede asegurar por fuera.", 
        reporte: "Daño en infraestructura", 
        nombre: "Mantenimiento", 
        prioridad: "alta", 
        estado: "resuelto", 
        fechaCreacion: new Date("2026-06-10")
    }
];