<div align="center"><h1><b>Les fonctions</b></h1></div>

Fonction pour multiplier les nombres
```ts
/* si les types number ne sont pas définis c'est une erreur
on peut aussi mettre un nombre */
function multiply(num1 : number, num2 = 10, action?: string) { 
    if(action) console.log(action);
    return num1 * num2;
}
console.log(multiply(6,10,"create"));
// sans l'action, il y pas d'erreur car le ? après action dit que c'est facultatif

// il possible de typé le retour mais là c'est inutile
function multiply(num1 : number, num2 = 10, action?: string) : number { 
```
Type Function (avec une F)
```ts
let foo: Function;

foo = () => {}
```

Signature de fonctions (modèle qui sera réutilisé)
```ts
// function signatures
let baz: (a: number, b:number) => number;
// inutile de typé car c'est fait dans la signature
baz = (a,b) => a + b;
// impossible d'ajouter 'c' car il est pas défini dans la signature
```

Fonction Callback (sera appeler par d'autres fonctions)
```ts
// fonction cunnue pour dire bonjour
// appel une autre fonction pour logger
function greetings(fn: (a: string) => void) {
    fn("Hello World")
}

function printToConsole(msg: string) {
    console.log(msg);
}

greetings(printToConsole)
/* 
1. greetings est appelée
2. elle exécute la fonction fn qui représente print to console
3. printToConsole va logger le message
*/
```