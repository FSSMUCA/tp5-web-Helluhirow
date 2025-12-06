function totalAvecRemise(total,remise)
{
    return (total - (total * remise/100)); 
}
let remise;
let total = Number(prompt("Entrez le total hors taxe : "));
do{
    remise = Number(prompt("Entrez la remise (entre 0 et 100) : "));
}while(remise > 100 || remise < 0);

console.log(totalAvecRemise(total,remise));
