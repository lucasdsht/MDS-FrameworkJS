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