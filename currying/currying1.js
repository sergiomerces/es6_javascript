/*Currying: uma única função que recebe um parâmetro continua retornando uma nova função */

function soma(a, b)
{
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));
console.log(soma(2, 6));

console.log("Reescrevendo a função com Currying:");
