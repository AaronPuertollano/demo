const promise = fetch("api.thecatapi.com");//saber sus estados: ponging, fullfilled, rejected
promise.then((value) => {
    //lo que se tenga que hacer con el valor de la promesa
})
promise.catch((error) => {
    console.error(error);
}); //tambien se pude encadenar .then.catch

const response = await fetch("...");//con await paraliza la funcion hasta obtener una respuetsa del fetch
//EXAMEN, utilizaremos una api y usaremos fetch para obtener valores de esa api, puede mostrar un codigo con una promesa
//y preguntarnos cosas sobre el funcionamiento de ese codigo, que hace? que saldria en pantalla? etc...

//ejemplo de una promesa
const promise2 = new Promise((resolve,reject) => {
    const value = Math.random;
    if(value > 1){
        resolve(value);
    } else {
        reject(new Error("Error!"));
    }
});

/*
Implementa function partition(string, n), que donat un string i un número n, retorna un array amb els caràcters del string separats en arrays de n items.
partition("Hello world!", 3) => [["H", "e", "l"], ["l", "o", " "], ["w", "o", "r"], ["l", "d", "!"]]
partition("Hello world", 3) => [["H", "e", "l"], ["l", "o", " "], ["w", "o", "r"], ["l", "d"]]
partition("Hello world", 2) => [["H", "e"], ["l", "l"], ["o", " "], ["w", "o"], ["r", "l"], ["d"]]

Implementa function camelCase(string), que donat un string amb blancs, retorni el string equivalent en camel case.
camelCase("Update user email") => "updateUserEmail"
camelCase("Email") => "email"

Implementa function fibonacciSeries(from, to), que retorna un array amb els números de la sequència de fibonacci entre from i to (inclusiu) (alerta: els arguments son les posicions del valors, no els propis valors). Assumim que la seqüència de fibonacci comença en 1: 1, 1, 2, 3, 5, 8, 13, 21, 34...
fibonacciSeries(3, 7) => [3, 5, 8, 13, 21]
fibonacciSeries(0, 1) => [1, 1]

Què és una funció pura? Quins avantatges té emprar funcions pures? Posa exemples en codi de funcions pures i impures.

Quines diferencies hi ha entre null i undefined? Què significa quan un valor és "falsy"? Posa exemples (amb codi) i comenta'ls.
*/