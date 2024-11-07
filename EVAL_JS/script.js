/* Syntaxe de base et variables :

Exo 1 : déclarer des variables de différents types (string, number, boolean) et d'afficher leur contenu dans la console.
Exo 2 : Écrire un script qui convertit des degrés Celsius en Fahrenheit.

Conditions et boucles :

Exo 3 : Écrire une condition pour vérifier si un nombre est pair ou impair, et afficher un message correspondant.
Exo 4 : Utiliser une boucle for pour afficher les nombres de 1 à 10, puis inverser la boucle pour les afficher de 10 à 1.

Fonctions :

Exo 5 : créer une fonction simple qui prend deux nombres et renvoie leur somme.
Exo 6 : Créer une fonction pour vérifier si une chaîne de caractères contient un certain mot.

Tableaux et objets :

Exo 7 : Créer un tableau de prénoms et afficher chacun avec une boucle.
Exo 8: créer un objet simple représentant une personne (nom, âge, ville) et d'accéder aux propriétés. (On affiche en console)

Manipulation de DOM :

Exo 9 :ajouter un élément de texte dans une page HTML via JavaScript.
Exo 10 : Créer un bouton via JS, on l’affiche dans la page et au click cela déclenche une alerte */


// Exercice 1 


let monAge = 30;
const monPrenom = "Yassine";
let booleanExemple= false ;


// console.log("je m'appelle " + monPrenom+ " j'ai " + monAge + " ans");
// console.log(booleanExemple);

// Exercice 2 

function conversionTemperature(){
    let temperatureC =prompt("écrivez une température en degrée °C : ");
    let TemperatureF = (temperatureC*9/5) + 32 ;
    console.log("vous avez saisi " +temperatureC + " degrée celsius ce qui fait " + TemperatureF +" Fahrenheit.");
    alert("vous avez saisi " +temperatureC + " degrée celsius ce qui fait " + TemperatureF +" Fahrenheit.");
};

// conversionTemperature();

//  let temperatureC =prompt("écrivez une température en degrée °C : ");
//  let TemperatureF = (temperatureC*9/5) + 32 ;
//  console.log("vous avez saisi " +temperatureC + "degrée celsius ce qui fait " + TemperatureF +" Fahrenheit.")

// Exercice 3 

function verificationOdd(){
    let n = prompt("Saisissez un nombre : ");

    if(n%2==0){
        console.log( n + " est un nombre pair.");
    }else{
        console.log(n + " est un nombre impair.");
    }
};

// verificationOdd();

// Exercice 4 

// Boucle de 1 à 10 : 
for(let i=1;i<11;i++){
    console.log(i);
}
// Boucle de 10 à 1 :

for(let i=10;i>0;i--){
    console.log(i);
}


// Exercice 5 

function simple(a,b){
    console.log(a+b);
}
simple(12,9)


// Exercice 6 

function verificationMot(mot,texte){
    let checkMot=0;
    for(let i=0;i<texte.length;i++){
        if(mot[i]==texte[i]){
            checkMot++
        }
    }
    if(checkMot==mot.length){
        console.log("Le mot est bien présent dans la chaine de caractère !");
    }else{
        console.log("Le mot n'est pas présent :(")
    }
};

// Verification avec un mot présent : 
verificationMot("Hello","Hello World !")
// Verification avec un mot pas présent : 
verificationMot("Hirondelle","Hello World !")


// Exercice 7 

let tableauPrenoms = ["Marcus","Gladius","Octopus","Françoise"];
for(let i=0;i<tableauPrenoms.length;i++){
    console.log(tableauPrenoms[i]);
};

// Exercice 8

let objetJ= {
    nom: "Debbouzz",
    prenom:"Josiane",
    age: 54,
    ville: "Toulouse",
}

function afficherProps(objet) {
    let resultat = "";
    for (let element in objet) {
    if (objet.hasOwnProperty(element)) {
        resultat += `${objet[element]}\n`;
    }
    }
    return resultat;
}

console.log(afficherProps(objetJ,"objetJ"))
// Exercice 9 

const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.innerText = "Lorem ipsium sit dolorr amet bla bla bla...";
document.body.append(nouveauParagraphe);

// Exercice 10 

// Création et ajout dans le DOM du bouton :
const boutonAlert = document.createElement("button");
boutonAlert.innerText="Appuyez ici";
document.body.append(boutonAlert);

// Ecouteur d'évenement (clique sur le bouton) = alert()
boutonAlert.addEventListener("click",()=>{
    alert(" H@ck3D !");
})


// Exercice 11 : API 

// Je crée la div qui contiendra le contenu de l'API :

const divAPI = document.createElement('div');
document.body.append(divAPI);

const contactApi =  async () => {
    const data = await fetch('https://api.chucknorris.io/jokes/random');
    console.log(data);

    const dataTransformed = await data.json();
    console.log(dataTransformed);
    divAPI.innerText = dataTransformed.value
};
contactApi();


// Exercice 12 

// Creation du toggle chartreuse mode : 
let bool= 0;
let toggle = document.createElement("button");
toggle.innerText ="Chartreuse Mode";
document.body.append(toggle);

document.body.style="width:100%;height:auto;text-align:center;"
// Ecouteur d'évenement :

function switchColor(){
toggle.addEventListener('click',()=>{
    bool++;
    if (bool%2 ==1){
        document.body.style = "width:100%;height:auto;text-align:center;background-color : Chartreuse";
        console.log('le if a fonctionné')
    }else{
    document.body.style = "width:100%;height:auto;text-align:center;background-color : White";
    }
    console.log("bool vaut : "+bool);
})
};

switchColor();

