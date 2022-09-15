/** Commentaire 
 * sur plusieurs
 * lignes 
 */

let number = 12;
let firstname = "coucou";

const coucou = 1

const bool = false

// demander son prenom a l'utilisateur & afficher sur la page
let text = prompt('votre prenom ?')

document.write(`tu t'apelle ${text}`)

// Créer un tableau qui contient 5 prenom
const nameTable = [
    'Lucas',
    'Maxence',
    'Rémi',
    'Alix',
    'Loïc',
]

//comment ecrire une condition
// si le tableu list contient au  moins 3 elements alors on va afficher 1 message sur la page '{bravo tu as nb de case} amis'

let liste = [
    'Lucas',
    'Maxence',
    'Rémi',
    'Alix',
    'Loïc',
]

if (liste.length >= 3) {
    document.write(`bravo tu as ${liste.length} amis`)
}

//demander un nombre a l'utilisateur, si il repond plus de 50 afficher waouh c beaucoup sinon afficher seulement
let input =  prompt('enter a number')
if (input > 50) {
    document.write('waouh c bcp')
} else {
    document.write('seulement')
}


// reprendre le tableau liste avec 4 types de boucles
// pour chaque prénom, on affiche Bonjour + prenom

/**
 * while
 * for
 * do...while
 * for...of
 */
let i = 0


while (i < liste.length) {
    document.write(`<p>Bonjour, ${liste[i]}</p>`)
    i++
}

for (i; i < liste.length; i++) {
    document.write(`<p>Bonjour, ${liste[i]}</p>`)
    
}

do {
    document.write(`<p>Bonjour, ${liste[i]}</p>`)
    i++
} while (i < liste.length);

for (const i of liste) {
    document.write(`<p>Bonjour, ${i}</p>`)
}