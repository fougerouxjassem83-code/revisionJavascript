//***je vais déclarer des variables variable pour mes révisions
//*08/01/2026


//**je déclare une variable de mon village  */
let village="Mamoudzou";
console.log("Mon village :",village);


//je vais déclarer une variable pour enregistrer le nom de mon chanteur préferé
const chanteur="trippieredd";
console.log("Mon artiste préféré :",chanteur);

//**ici  */
 let age= 26;
 console.log("Age :",age);

                /**ici j'ai creer un tableau d'album sous forme de tableau*/
let album =["1:Lovescar","2:Pegasus","3:Loveletter","4:Genresadboy","5:DNA",];
console.log("Meuilleur Album de trippie redd",album);
    console.log("")
    console.log(album[0]);   // j'ai récuperer le premier Album de mon chanteur trippieredd
    console.log(album[3]);   // j'ai récupéré le quatrime Album de mon chanteur trippieredd
    console.log(album[4]);   // j'ai récupéré le cinquieme Album de mon chanteur trippieredd


                    //** ici j'ai créer un disque cd c'est a dire un  sous forme d'objet*/
let client = {
    titre :"Excitement",
    chanteur:"Trippie redd",
    datedesortie :"15 mai 2020",
    durée : "3 minute",
    styledemusique : "RNB",
    compositeur: "lagos",
    auteur : "trippie redd",
    Prix : "15 euro",
    lienyoutube :"https://www.youtube.com/watch?v=3HpkeRUTdKs"
};

    //**ici j'affiche tout mes trucs */
console.log(client);                         
console.log("TITRE :",client.titre.toUpperCase()); //**je peux aussi mettre en minuscule>>toLowerCase */
console.log(client.lienyoutube);    //**j' affiche le lien



                    // ici je fait un petit tableau de note */
let notes =[34,26,86,33,17,68];
console.log(notes);

//ici je récupère la plus grande note
let maxnote = Math.max(...notes);
console.log("la plus grande note",maxnote);

//ici je recupère la petite note
let minNote = Math.min(...notes);
console.log("la petite note",minNote);

 //**ici j'ai créer un petit tableau de fruit et de légumes */          
let tableaufruits =["manga","papaya","fenissi","tundra","sindza"];
let tableaulegumes =["demba","tamati","dodoki","bengani","mafana"];
console.log("fusion fruis et légumes:",...tableaufruits,...tableaulegumes);

let fusionfruits = [...tableaufruits,...tableaulegumes];
console.log("fusion des fruits:",fusionfruits);



     //La notion de MAP
     //**Dans une map la map permet de structurer (coder),Les informations en forme de couple. 
     // Le couple est formé d'une clé et d'une valeur clée-valeur ou key-value en anglais(anglais)*/
    //Map()est un object 
    //je vais plusieur >>instance "signifie exemplaire"

let mapVetements = new Map([
    ["t-shirt",100],  
    ["chemise", 200],
    ["robes",300],
    ["salouva",250]
]);

console.log(mapVetements);