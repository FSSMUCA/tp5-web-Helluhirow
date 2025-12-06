function verifierMotDePasse(mdp)
{
    if(mdp.length>=8 && mdp.includes("@"))
    {
        return true;
    }
    else return false;
}

let mdp = prompt("Veuillez entrer le mot de passe : ");

if(verifierMotDePasse(mdp))
{
    console.log("mot de passe valide");
}
else
{
    console.log("mot de passe invalide");
}