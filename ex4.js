let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

for(let i = min; i<=max ; i++)
{
    if(i%3 == 0)
    {
        console.log(i," is a multiple of Three");
    }
    else if(i%5 == 0)
    {
        console.log(i," is a multiple of Five");
    }
    if(i%3 == 0 && i%5 == 0)
    {
        console.log(i," is a multiple of Three and Five");
    }
}
