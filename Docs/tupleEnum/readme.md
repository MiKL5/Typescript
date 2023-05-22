<div align="center"><h1><b>Tuple et Enum</b></h1></div>

## **Tuple**
C'est un tableau avec une longueur définie est un type défini pour chaque élément du tableau.  
C'est encore plus restrictif.
```ts
let tuple : [boolean, number]
tuple = [false, 20]
/*
ce tableau a une longueur de 2 
le premier élément est un booléen
le second, un nombre

il ne prend pas d'autre type
ni plus d'élément
*/

// mais, le tuple a une défaut
tuple.push(4)
console.log(tuple);
// la méthode push change la longueur à 3, car 4 est ajouter
```

## **Enum**
Simplifie le code ci-dessous
```ts
const Roles = {
    JAVASCRIPT: 1,
    CSS: 2,
    REACT: 3
}
console.log(Roles.JAVASCRIPT);
```
```ts
// C'est un objet qui gère les rôles
enum Roles {JAVASCRIPT, CSS, REACT}

console.log(Roles); // la numérotation commence à 0

enum Roles {JAVASCRIPT = 1, CSS, REACT}

console.log(Roles); // la numérotation commence à 1
console.log(Roles.JAVASCRIPT); // répond 1

```