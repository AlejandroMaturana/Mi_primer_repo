// Ejemplo: Depurando una suma
let a = 10;
let b = 20;
console.log('El valor de a es:', a);
console.log('El valor de b es:', b);

let resultado = a + b;
console.log('El resultado de la suma es:', resultado); // Imprimirá: El resultado de la suma es: 30


// Ejemplo: Mostrando un objeto y un array
const usuario = {
    id: 1,
    nombre: 'Ada Lovelace',
    email: 'ada@example.com',
    roles: ['developer', 'mathematician']
};

console.log(usuario); // Muestra el objeto de forma interactiva
console.table(usuario); // Muestra el objeto como una tabla (muy útil para arrays de objetos)

const usuarios = [
    { id: 1, nombre: 'Ada Lovelace' },
    { id: 2, nombre: 'Grace Hopper' }
];
console.table(usuarios); // Muestra una tabla con los datos de los usuarios