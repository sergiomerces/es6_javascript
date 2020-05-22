//Reescrevendo a função com Currying

function soma(a)
{
    return function(b)
    {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));
console.log(soma2(6));