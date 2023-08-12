// Escribir una función que determine si dos objetos son iguales:

function sonIguales(obj1, obj2) {
    //Check si los elementos son arreglos y si ambos lo son
    if(Array.isArray(obj1) && Array.isArray(obj2))
    {
        //Recorrer cada elemento y comparar elementos
        for(let i= 0; i <= obj1.length; i++)
        {
            if(!sonIguales(obj1[i], obj2[i])) //Utilizamos recursion para comparar 
            {
                return false;
            }
        }

        return true; //Los elementos son todos iguales
    }

    //Check si los elementos son objetos y si ambos lo son
    if(typeof obj1 === 'object' && typeof obj2 === 'object')
    {
        const keys = Object.keys(obj1); //Acceder a los keys y obtener un arreglo de keys del obj1

        //Recorrer los keys con for of para poder hacer una comparacion
        for(const key of keys){
            if(!sonIguales(obj1[key], obj2[key]){
                return false;
            }
        }

        return true;
    }

    //Console log true or false after the comparison of elements 1 and 2
    return obj1 === obj2;

}
// Todos los console logs deben retornar true:
console.log(sonIguales(2, 2));
console.log(sonIguales([1, 2, 3], [1, 2, 3]));
console.log(sonIguales({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(sonIguales([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }]));
console.log(sonIguales([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABC' } }]));