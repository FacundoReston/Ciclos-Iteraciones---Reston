/* Uso la estructura de ciclos FOR y WHILE, y la estructura condicional IF ELSE para simular un sistema de turnos (de hasta 10 turnos) en una clinica de hospital */

for (i = 1; i <= 10; i++) {
    let nombre = prompt("Ingrese su nombre");
    if (nombre === "") {
        alert("No ingresaste tu nombre")
    } else {
        alert(`Hola ${nombre}, tienes el turno N° ${i}`);
        while (i === 10) {
            alert("No hay turnos disponibles");
            prompt("Ingrese su nombre")
        }
    }
}