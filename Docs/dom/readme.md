<div align="center"><h1><b>DOM</b></h1></div>

Il y a un type pour chaque élément html, car chaque élément peut avoir des caractéristiques spéciales, des propriétés et des méthodes.
```ts
// Assertion (les types sont préconfigurés quand les variables sont déclarées)
const form = document.querySelector('form')
console.log(form.children); /* null peut poser problème car s'il n'y a pas de formulaire,
on ne peut pas retourner les enfants de rien. */
```
Mais, il y a plusieurs façons de contourner
```ts
// Assertion
const form : HTMLFormElement = document.querySelector('form')!
console.log(form.children);
```
Il y a plus efficace que l'assertion.  

Le type casting donne le type spécial au moment d'assigner une valeur.  
Pratique avec le DOM, puisqu'il y a énormément de types spéciaux.  
`HTMLFormElement` quand la valeur `document.querySelector('form')` est assignée.
```ts
// Type Casting
const form = document.querySelector('form') as HTMLFormElement
const form = document.querySelector('input') as HTMLFormElement // erreur car y a toujours une sécurité
const form1 = document.querySelector('.form-container') /* dans cette classe, il y a element qui regroupe
tout les éléments de façon générale. Il n'y a pas toutes les propriétés et méthodes à chaque fois.
retourne généralement soit une élément, sot null. */
const form2 = document.querySelector('.form-container') as HTMLFormElement // alors ne pas omettre le casting à la fin
console.log(form.children);
const input = document.querySelector('input') as HTMLInputElement
```
<br>

Avec le DOM, on utilise `addEventListener`
```ts
form.addEventListener('submit', handleSubmit)

function handleSubmit(event : Event){ // sans le type spécial Event (evt global qui donne accés à 'preventDefault'), il y aurait une erreur
    event.preventDefault() // reçoit depuis 'addEventListener' l'objet d'evênement correspondant a submit
    console.log("SUBMITTED");
}
```

Il y a d'autres types d'évènements.
```ts

window.addEventListener('click', handleClick)

function handleClick(event: MouseEvent) { // les clck ont le type 'MouseEvent'
    console.log(event.clientX, event.clientY);
}
```
```ts
const paragraphsList = document.querySelectorAll('p');  // querySelectorAll retourne une liste de nœud noeud (node list),
console.log(paragraphsList);
/* 
le type casting n'est pas utile, car, 'document.querySelectorAll' ne peut par retourner null
la console montre une node list même si elle est vide
c'est une node list de <HTMLParagraphElement>, le type casting est inutile, car on accès
à tout ce qui nous intéresse dans une node list
- forEach pour faire qqch avec tous les éléments qu'il y a parmi ce qui est retourner
- item (assez peu utiliser)
- length (assez pue utiliser) permet entre autres de savoir combien de paragraphes sont sélectionnés
*/
const paragraphsList = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>; // donne accés à forEach, item et length
// donc trop typé, être trop précis n'est pas utile en plus d'être moins lisible
// s'assurer si le type est induit comme pour 'let num =5'
```