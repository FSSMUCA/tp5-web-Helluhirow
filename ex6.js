let pair=0;
let impair=0;

for(let i = 1; i <=50 ; i++)
{
    if(i%2==0)
    {
        pair =+ i;
    }

    else if(i%2!=0)
    {
        impair =+ i;
    }
}

console.log("Somme des nombres pairs = ",pair);
console.log("Somme des nombres impairs = ",impair);