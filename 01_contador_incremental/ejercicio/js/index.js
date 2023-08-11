
// Escribir una función clousure que 
// aumente un contador en 1 cada vez que la función se llame

//1. Crear variable de contador
let count = 1
//2. Crear una funcion para aumentar el contador Cada vez que la funcion se llame
function aumentarContador() {
    for(i = count;i <= 10; i++)
    {
        console.log(i)
    }
}
//3. LLamar a la funcion y mostrar el resultado en consola
aumentarContador()
//Clousure: Tienes una closure cuando una función cualquiera accede a una variable fuera de su contexto.
count = 5
aumentarContador()

//IT WORKS!