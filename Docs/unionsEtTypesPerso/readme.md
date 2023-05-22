<div align="center"><h1><b>Les unions eţ types personnalisés</b></h1></div>

## **Les unions**
Union pour les variables
```ts
let code : string | number | boolean | object | Function;
code = 5 // tout les types ci-dessus sont possibles
```
Union pour les tableaux
```ts
// l'union est entourée de parenthèses pour le tableau, sinon, c'est une erreur
let arr : (boolean | number)[]
arr = [true, false, 999]
```
Union dans les paramètres de fonction
```ts
const foo = (param: number|string) => {
    console.log(param);
}
foo('Test')
```
## **Les types personnalisés (types Aliases)**
type Aliases
```ts
type mixedNumStr = number | string;
type booleanOrObject = boolean | object;

// la fonction prend tout ces types
const baz = (param: mixedNumStr | booleanOrObject) => {
    console.log(param);
}
baz(true)
```

On peut créer des objets
```ts
// écrit comme un objet, mais avec ';' à la fin car la doc ts le préfère
type element = {
    x: number;
    y: number;
    id: number | string;
    visible: boolean;
}

// l'élément se rempli comme suit
const button : element = {
    x: 99,
    y: 50,
    id: 999,
    visible: true
}
```