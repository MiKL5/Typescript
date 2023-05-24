<div align="center"><h1><b>Les classe de base</b></h1></div>

Une classe sert à créer des objets  
Introduit en JavaScript depuis 2015, ES6  
Le but est de créer des objets avec certaines propriétés et toues les méthodes écrites dans les classes sont intégrées directement au prototype de cet objet. 
```ts
class Book {
    title: string;
    price: number;
    dateOfRealease: string;
    author: string;
    theme?: string[]

    constructor(t: string, p: number, dop: string, a: string, th?: string[]) {
        this.title = t;
        this.price = p;
        this.dateOfRealease = dop;
        this.author = a;
        this.theme = th;
    }

    promo(){
        return this.price * 0.5;
    }
}

const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
console.log(book1); // ça fonctionne et la méthode 'promo' est ajoutée dans prototype
console.log(book1.promo()); // retourne le prix remisé


// la classe 'Book' peut-être utilisée en tant que type
const addToShelter = (obj: Book) => {
    console.log("ADDED TO SHELTER", obj);
}
addToShelter(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))


/* 
cette variable est un seulemeent tableau avec des objets venant de 'Book'
et les caractèristiques dans le tableau
*/
let onlyBook : Book[] = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))
console.log(onlyBook); // il y a bien un tableau  avec les caractèristiques
```