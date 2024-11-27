let regex = /\b(?:(?:ass+(?:\s+)?|i+(?:\s+)?|butt+(?:\s+)?|mo(?:(?:m|t|d)h?(?:e|a)?r?)(?:\s+)?)?f(?:(?:\s+)?u+)?(?:(?:\s+)?c+)?(?:(?:\s+)?k+)?(?:(?:e|a)(?:r+)?|i(?:n(?:g)?)?)?(?:s+)?(?:\s+)?(?:hole|head|(?:yo?)?u?)?)+\b/

function isValid(contenu){
    return !regex.test(contenu)
}

class Utilisateur {
    constructor(nom){
        this.nom=nom;
        this.publication=[];
        this.groupes=[];
    }
    // Méthodes : 
    publier(contenu){
        try {
            if(isValid(contenu)){
                this.publication.push(contenu);
                console.log(`
                Publication de ${this.nom} :
                        ${contenu}
                -- fin de publication --`)
            }else{
            throw new Error(`Chère ${this.nom}, votre publication est refusé ! Vous avez utilisé un mot interdit`);}
        } catch (error) {
            console.log(error);
        }
    }
    ajouterMembre(utilisateur){
        this.groupes.push(utilisateur);
    }
}


class Publication{
    constructor(contenu){
        this.auteur =auteur;
        this.contenu =contenu;
        this.commentaires =[];
    }
    // Méthodes : 
    ajouterCommentaire(commentaire){
        try {
            if (isValid(commentaire)) {
                this.commentaires.push(commentaire)
                console.log(`Votre commentaire à été ajouté avec succès ! 
                    Contenu du commentaire : 
                    ${commentaire}`)
            } else {
                throw new Error(`Commentaire refusé !Vous avez utilisé un mot interdit !`);
            }
        } catch (error) {
            console.log(error)
        }
    }
}



class Commentaire{
    constructor(contenu){
        this.auteur =auteur;
        this.contenu=contenu;
    }
    // Méthodes :
}


let estprive=true;
class Groupe{
    constructor(nom,estprive){
        this.nom=nom;
        this.estprive=estprive;
        this.membres=[];      
    }
    //Méthodes : 
    // ajouterMembre(utilisateur){
    //     this.membres.push(utilisateur);
    // }
    afficherContenu(utilisateur){
        try {
            if(this.membres.find(unUtilisateur => unUtilisateur.utilisateur===utilisateur)){
                console.log(`${utilisateur.nom} fait parti du groupes ${this.nom} est à donc accès au contenu. `)
            }else{
                throw new Error(`Chère ${utilisateur.nom}, vous n'avez pas accès à ce groupes !`);
            }
        } catch (error) {
            console.error(error.message);
        }
    }
    ajouterMembre(utilisateur){
        this.membres.push(utilisateur);
        console.log(`${utilisateur} ajouté au groupe ${this.nom}`)
    }
}

// ajout d'utilisateurs :
const utilisateur1 = new Utilisateur("Alice");
const utilisateur2 = new Utilisateur("Bob");
const amandine38 = new Utilisateur("Amandine du 38");

// Ajout de groupes :
const groupePublic = new Groupe("Voyageurs", false);
const groupePrivé = new Groupe("Investisseurs", true);


// Publication des utilisateurs :
utilisateur1.publier('coucou les z\'amis')
const publication = utilisateur1.publier("Bienvenue  dans mon réseau social !");
const publicationInvalide = utilisateur2.publier("Bienvenue  dans mon réseau social fuck !");
 
const publicationInvalide2 = utilisateur1.publier("fuck you !");
const publication3 = utilisateur1.publier("Hello World ! it mean 'Salut Monde !'");
 

//! Scénario FAIL : on essaie d'afficher  le contenu d'un groupe privé à Charlie
    // Mais charlie n'est pas membre de ce groupe donc erreur
    const justiceLeague = new Groupe("La Justice League", true);
    const charlie = new Utilisateur("Charlie");
    justiceLeague.afficherContenu(charlie); // Cela devrait déclencher l'erreur on affiche pas le contenu privé à charlie

    //! Scénario FAIL : Amandine est dans un groupe privé 
    // Mais elle essaie quand meme de rejoindre ce groupe donc erreur 
    // vous etes déjà dans ce groupe (ca évite les doublons)
    // groupePrivé.ajouterMembre(amandine38);
    amandine38.ajouterMembre(groupePrivé);

    utilisateur1.ajouterMembre(groupePublic);
    utilisateur2.ajouterMembre(groupePrivé);