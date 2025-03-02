const edad = Number(prompt("Ingrese la edad del visitante"))
let costoEntrada = 0

switch (true) {
    case edad < 12:
        costoEntrada = 10
        break;
    case edad >= 12 && edad <= 60:
        costoEntrada = 20
        break
    case edad > 60:
        costoEntrada = 15
        break
}

alert(`El costo de la entrada es: $${costoEntrada}`)
undefined
