<div align="center"><h1><b>Les opérateurs</b></h1></div>

## **L'opérateur `!`**
Spécifie que ça ne retourne jamais 'null'

```ts
const container = document.querySelector(".container")!;
console.log(container.children); // sans le '!' il y aurait une erreur mais le type casting est préférable
```

## **L'opérateur `?`**
Souvent utiliser avec le DOM
Utiliser pour l'optional shining, les interfaces et les paramètres de fonctions
```ts
type Job = {
    title: string;
    description?: string; //Ici, il rend la description facultatif
    salary: number;
}
const user1: Job = {
    title: "Dev Front-End",
    description: "Développeur de sites internet.",
    salary: 30000
}
console.log(user1?.description); // Lit la description si 'user1' n'est pas null, si null, dit  undifined
```

#### **Paramètre optionnel**

```ts
function message(msg?: string){ // le paramètre message est facultatif
    if(msg) {
        console.log(msg);
    } else {
        console.log("No message provided");
    }
}
message("Hello World")
```

#### **Propriétés d'interface facultatives**

```ts
// Optional interface property

interface House {
    room: number;
    price: number;
    garage?: number;
}
const house1 : House = {
    room: 4,
    price: 300000
}
```

## **L'opérateur `??`**
Permet de montrer si c'est faux ou vide
```ts
const data = ""; /* si il y a 'null' ou 'undifined' ; Hello World dans la console
pour tout le reste comme 0 ou " " ; affiche 0 ou le vide par exemple */
const display = data ?? "Hello World"
console.log(display);
```

## **Never** dit qu'il n'y a pas de return
N'est pas un opérateur  
C'est un type de retour
```ts
function alertUser(msg: string): never { // never précise qu'il n'y a pas de return
    throw msg; // envoi juste une erreur
}
alertUser("Alerte, comportement dangereux") // celle-ci
```