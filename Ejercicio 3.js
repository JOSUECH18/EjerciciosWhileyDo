Ejercicio 3
/* UNA EMPRESA DE ENVÍOS QUIERE IMPLEMENTAR UN PROGRAMA PARA CALCULAR EL COSTO DE ENVÍO DE UN PAQUETE. EL COSTO DEPENDE DEL DESTINO Y DEL PESO DEL PAQUETE. SI EL DESTINO ES DENTRO DEL PAÍS, EL COSTO ES DE $10 POR CADA KILO. SI EL DESTINO ES FUERA DEL PAÍS, EL COSTO ES DE $20 POR CADA KILO. ESCRIBE UN PROGRAMA QUE CALCULE EL COSTO DE ENVÍO DE UN PAQUETE DADO SU DESTINO Y PESO.*/

const destino = prompt('Ingrese el destino (dentro/fuera)');
const peso = prompt('Ingrese el peso del paquete en kg');
let costoEnvio;

switch (destino) {
    case 'dentro':
        costoEnvio = peso * 10;
        break;
    case 'fuera':
        costoEnvio = peso * 20;
        break;
    default:
        costoEnvio = 'Destino no válido';
}

alert('El costo de envío es: ' + costoEnvio);
