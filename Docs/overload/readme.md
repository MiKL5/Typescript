<div align="center"><h1><b>Les surcharges</b></h1></div>

La `function overload` permet de gérer TOUS les retours possibles de la fonction  
Si à un moment donné ça retourne autre chose, ça retournera une erreur
```ts
type NumberOrString = number | string;

function combine(a: NumberOrString, b: NumberOrString) {
    if(typeof a === "string" || typeof b ==="string") {
        return a.toString() + b.toString()
    } else {
        return a + b;
    }
}
console.log(combine(Test1, Test2)); // concatène
console.log(combine(Test1, 1)); // concatène
console.log(combine(50, 1)); // additione
```
```ts
function combine(a: NumberOrString, b: NumberOrString) : number | string {  // mais ça reste assez ouvert
    if(typeof a === "string" || typeof b ==="string") {
        return a.toString() + b.toString()
    } else {
        return a + b;
    }
}
console.log(combine(Test1, Test2)); // concatène
console.log(combine(Test1, 1)); // concatène
console.log(combine(50, 1)); // additione
```
·> Pour la `function overload`, il faut enlever l'accolade
```ts
function combine(a: number, b: number): number
function combine(a: number, b: string): string
function combine(a: string, b: number): string
function combine(a: string, b: string): string
function combine(a: NumberOrString, b: NumberOrString){
    if(typeof a === "string" || typeof b ==="string") {
        return a.toString() + b.toString() // si je voulais retourner un tableau, il y aurait une erreur 
    } else {
        return a + b;
    }
}
console.log(combine(50, 1));
```
Ça permet d'être très précis quand il y a de multiples retours de fonction avec plusieurs types