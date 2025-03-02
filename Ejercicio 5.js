let dia = prompt("Escribe un día de la semana:");


dia = dia.toLowerCase();


if (dia === "lunes" || dia === "martes" || dia === "miércoles" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
    alert("Es un día laborable.");
} else if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
    alert("Es fin de semana.");
} else {
    alert("Ese no es un día válido.");
}