<div align="center"><h1><b>Les `Generics`</b></h1></div>

Sorte de paramètres réutilisables avec les interfaces et les fonctions  
Les `generics` résolvent des problèmes précis et ajoutent des fonctionnalités intéressantes avec les interfaces

## **Les interfaces réutilisables**
```ts
interface City<T> {
    name: string, 
    pop: number,
    additionalData: T // [¹]
}
const Londres : City<object> = { // attend un type qui est object
    name: "Londres",
    pop: 10,
    additionalData: {area: 1572} // ne peut donc pas être une chaîne de caractère
}
const Paris : City<object[]> = { // voulu un tableau d'objets
    name: "Paris",
    pop: 5,
    additionalData: [{underground: true, lines: 57}, {restaurant: true, number: 558}] // passe bien le type tableau d'objets
}

/* 
[¹] ça doit être tout ce que l'on veut, il y a un autre moyen que l'union
    mettre un entre chevrons `<T>`en haut à côté du nom de l'interface,
    puis passer le T pour type a 'additionalData' 
*/
```

## **`Generic` avec fonction**[¹]

```ts
const addRepairDate = (obj: object) => { // j'attend un objeet, mais ne dit pas ce que ç'est
    const lastRepair = new Date()
    return {...obj, lastRepair}
}

const auto1 = addRepairDate({model: "A1", km: 70000, price: 10000})
console.log(auto1); // fonctionne
console.log(auto1.model); // ereur car on se sait pas quel propriété vont entrées  dans lastRepair

//il faut utiliser un `generic`
const addRepairDate = <T> (obj: T) => {
    const lastRepair = new Date()
    return {...obj, lastRepair}
}

// toutes les propriétés sont accessibles
const auto1 = addRepairDate({model: "A1", km: 70000, price: 10000})
const auto2 = addRepairDate({model: "A1", km: 70000, price: 10000, color: "white"})
const auto3 = addRepairDate("TEST") // ça passe quand-même
console.log(auto1.model);
```
[¹] Néanmoins, `generic` accepte obsolument tout et enregistre les types.  
    Accepte à la fois, un objet, une châines de caractères, etc.

#### **Alors l'`extends` le rend moins générique**  

Maintenant, seuls les objets sont acceptés en arguments

```ts
const addRepairDate = <T extends object> (obj: T) => {
    const lastRepair = new Date()
    return {...obj, lastRepair}
}

const auto1 = addRepairDate({model: "A1", km: 70000, price: 10000})
const auto2 = addRepairDate({model: "A1", km: 70000, price: 10000, color: "white"})
console.log(auto1.model);
```