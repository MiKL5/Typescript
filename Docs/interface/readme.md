<div align="center"><h1><b>Les interfaces</b></h1></div>

Les interfaces permettent de créer que des objets avec des propriétés qui prennent certains types.  
Elles ressemblent beaucoup aux types personnalisés.  
```ts
interface Rocket {
    reactors: number; // fini de préférence par ';' même si ',' est acceptée.
    vMax: number;
    takeOff: (action: string) => void // ce paramètre prend une action qui est une chaîne et retourne un vide, qui va juste décollé
}
```
Identique à
```ts
type Rocket2 = {
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void
}
```
La différence majeure est que l'interface représente toujours des objets.
Elle permet également le merging (fusion).
```ts
interface Rocket {
    price: number;
    fuel: number;
}
```
TS concidère qu'il y a 2 types de même nom, alros qu'il fusionne les interface.  
Les interfaces s'utilisent avec les classes.
```ts
class RocketFactory implements Rocket {
    reactors: number; // this.reactor y fait référence
    vMax: number;
    price: number;
    fuel: number;
    
    constructor(r: number, vMax: number, p: number, f: number) { // fn constructor
        this.reactors = r; // r est l'agument passé pour créer le nouvel objet
        this.vMax = vMax;
        this.price = p;
        this.fuel = f;
    }
    takeOff(action: string){
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12,900,2,9000) // entre parenthèses les objets
console.log(Falcon1); // la console affiche bien les 12 réacteurs, etc.
Falcon1.takeOff('Décollage')
```