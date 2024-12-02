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