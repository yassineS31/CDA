let title =document.createElement('h1');
title.innerText="TP-4: API randomUser DOM";
document.body.append(title);

const contactAPI = async()=> {
    const data= await fetch('https://randomuser.me/api/');
    const dataTransformed =await data.json();
    console.log(dataTransformed);
    //creation d'une constante pour faciliter l'écriture du code :
    const path=dataTransformed.results[0];
    // Creation de la card avec une div : 
    let divCard = document.createElement('div');
    document.body.appendChild(divCard);
    divCard.style="Width: 300px;Height:auto;border:1px solid black; background-color:#ADD8E6;display:flex;flex-direction:column;justify-content:center;align-items:center;"

    // Ajout de la photo : 
    const photoUser = document.createElement('img');
    photoUser.setAttribute('src',path.picture.large);
    divCard.appendChild(photoUser)

    // Ajout du nom de l'user avec un titre H2 : 
    let nom = document.createElement("h2");
    nom.innerText = path.name.title+" " + path.name.first+" " +path.name.last;
    divCard.append(nom)

    // Ajout de l'adresse mail :
    let adresseMail = document.createElement("p");
    adresseMail.innerText=path.email;
    divCard.appendChild(adresseMail)

    // Ajout de l'adresse postale : 

    let adressePostale = document.createElement('p');
    adressePostale.innerText="Adresse : "+path.location.street.number + " "+ path.location.street.name +" "+path.location.city +" "+ path.location.country
    divCard.appendChild(adressePostale)

    // Ajout du numéro de téléphone : 
    let numeroTel = document.createElement('p')
    numeroTel.innerText="phone : "+path.phone;
    divCard.appendChild(numeroTel);

    // Ajout du bouton : 
    const boutonReload=document.createElement("button");
    boutonReload.innerText="Random User";
    divCard.appendChild(boutonReload);
    boutonReload.style="width:150px;height:25px;background-color:blue;border-radius:10px;border:none"

    // nouveau appel à l'API
    boutonReload.addEventListener('click',()=>{
        // Je supprime le contenu précédent :
        document.body.divCard = ""
        contactAPI()
    })
}


contactAPI()


// PAS TERMINER