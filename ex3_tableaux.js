
const notes = [12, 8, 15, 10, 7];
let somme = 0;
let meilleureNote = notes[0]; 
let nbAdmis = 0;

for (let i = 0; i < notes.length; i++) {
    const noteActuelle = notes[i];

  
    somme += noteActuelle;

 
    if (noteActuelle > meilleureNote) {
        meilleureNote = noteActuelle;
    }

    if (noteActuelle >= 10) {
        nbAdmis++;
    }
}

const moyenne = somme / notes.length;


console.log(" Résumé des notes ");
console.log(`Moyenne de la classe : ${moyenne}/20`);
console.log(`Meilleure note : ${meilleureNote}/20`);
console.log(`Nombre d'élèves admis : ${nbAdmis}`);