import { incidentes } from "./data";
import { registrarIncidente, actualizarEstadoIncidente, reporteMensual } from "./services";

console.log("--- INICIANDO PROYECTO: CONTROL DE INCIDENTES C27 ---");

console.log("--- 1. Crear Incidente ---");
const nuevo = registrarIncidente({
    titulo: "Fallo de proyector",
    descripcion: "El proyector del salón C27 parpadea y se apaga solo",
    reporte: "Mal funcionamiento de hardware",
    nombre: "Profesor Pedro Armas",
    prioridad: "media"
});

console.log("Incidente creado con éxito:", nuevo);

console.log("--- 2. Actualizar Estado---");
actualizarEstadoIncidente("INAV-0001", "enProgreso");
const incidenteModificado = incidentes.find(inc => inc.id === "INAV-0001");

console.log("Incidente actualizado:", incidenteModificado);

console.log("--- 3. Probando Actualizar Estado (ID Inexistente) ---");
actualizarEstadoIncidente("ID-FALSO-999", "resuelto");

console.log("--- 4. Generando Reporte Mensual ---");

const reporteMes = reporteMensual(5); 

console.log(`Se encontraron ${reporteMes.length} incidentes en el mes de Junio:`);
reporteMes.forEach(inc => {
    console.log(`ID: ${inc.id} | Título: ${inc.titulo} | Estado: ${inc.estado} | Reportó: ${inc.nombre}`);
});