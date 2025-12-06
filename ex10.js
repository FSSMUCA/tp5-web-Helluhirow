let counterit=0;

function sommeIterative(n)
{
    for(let i = 1; i <= n;i++)
    {
        counterit = counterit+i;
    }
    return counterit;
}
function sommeRecursive(n)
{
    if(n==0) return 0;
    else return n+sommeRecursive(n-1);
}

let n = 10;

console.log(sommeIterative(n));
console.log(sommeRecursive(n));

// 1- le code le plus lisible : sommeIterative.
// 2- le code le plus performant : sommeRecursive.
// 3- oui, elle pourra poser des problemes si le cas trivial n'est pas bien choisi, ainsi que la recursivité a une compléxité algorithmique avancée
// 4- la majorité des cas lorsqu'on a la condition d'arret.