
export const generarId = () => {

    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
}

// export const formatearFecha = (fecha) => {

//     const fechaNueva = new Date(fecha)
//     const opciones = {
//         year: "numeric",
//         month: "long",
//         day: "2-digit"
//     }
//     return fechaNueva.toLocaleDateString("es-ES", opciones)
// }

export const convertirFecha = (fecha) => {
    var d = new Date(fecha);
    var mm = d.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm
    }
    var dd = d.getDate();
    if (dd < 10) {
        dd = '0' + dd
    }
    var yy = d.getFullYear();
    var myDateString = dd + '-' + mm + '-' + yy; //(US)
    return (myDateString)
}