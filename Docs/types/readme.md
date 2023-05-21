<div align="center"><h1><b>Les types de bases</b></h1></div>

```ts
let str = "str" // déduit une chaîne de caractère
let num = 5
let array = [] // prend tout sauf si on est plus précis
let obj = {
    a: 5
}
let toggle = true

let anything; // rarement inféré `: any`
let randomNumber : number;

const conversion = (celsius : number) => {
    return (celsius * 9/5) + 32;
}
```
Ça vient inférer si c'est un nombre, un tableau, un objet, un booléen.  
Le type `anything` accepte tout. Par contre, `randomNumber` ne prend que les nombres.  
Il est aussi possible de changer le type des paramètres d'une fonction. Le mot 'celsius' renvoi une erreur s'il n'est pas typé.