<div align="center"><h1><b>Astuces pour les types personnalisés et les interfaces</b></h1></div>

**Les intersections** consistent à mélanger deux types personnalisés
```ts
type Fish = {
    fin: number;
    element: "water";
    gills: true;
}
type Shark = { // le requin marteau a les deux types
    weight: number;
    length: number;
}
type HammerheadShark = Fish & Shark & { // ce type hérite des deux autres types
    test: "abc"
};

const shark1: HammerheadShark = {
    fin: 3,
    element: "water",
    gills: true,
    weight: 500,
    length: 200,
    test: "abc" // donc le requin peut l'avoir
}
```
**Le signe `&`** peut-être utiliser comme ça, c'est une autre manière
```ts
let obj: {
    prop1: "a"
} & {
    prop2: "b"
}
```

Lier des interfaces[¹]
```ts
interface Flower {
    pollen: true;
    type: "vegetal"
}
interface Rose extends Flower { // extends permet de liers les interfaces
    color: string;
    thorn: boolean;
}
const RedRose: Rose = {
    pollen: true,
    type: "vegetal",
    color: "Rose",
    thorn: true
}
```

Discriminated union ···> union discriminante
```ts
type Japan = {
    lang: "JP";
    food: string[];
}
type Italy = {
    lang: "IT";
    food: string[];
}
type Country = Japan | Italy; // en liant les pays que faire de 'lang' et 'food'

const automaticResponse = (country: Country) => { // cette variable qui prend un pays qui fait référence à l'un su-sité
    if(country.lang === "JP") { //contient une foncitin fléchée qui les distingues
        console.log("Hello Japan");
    } else if (country.lang === "IT") {
        console.log("Hello Italy");
    }
}
const Japanese1 : Country = {
    lang: "JP",
    food: ["Ramen", "Sushis"]
}
automaticResponse(Japanese1) // Hello Japan est bien dans la console.
```

**Quand on ne sait pas combien de propriété utiliser**  
Ce type d'interface permet un nombre de propriétés potentiellement infini
```ts
interface Group {
    [name: string] : object; // objet est ce qui entrera dans les propriétés
}
const spainTrip: Group = {
    john: {id: 1},
    tom: {id: 2},
    julia: {id: 3},
} // les doubles côtes ne sont pas obligatoire pour le prénom car c'est déjà interpreter comme une chaîne de caratères
```
<br>

___
> [¹] Les interfaces sont utilisées avec les classes à partir de laquelle on va créer plusieurs classes au lieu de répéter plusieurs propriétés qu'on pourrait partager à plusieurs classes