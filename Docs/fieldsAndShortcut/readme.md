<div align="center"><h1><b>Les champs et le raccourci</b></h1></div>

Si on ne précise rien, c'est par défaut `public` c'est donc accessible et modifiable en dehors de la méthode  
Alors que `private` est accessible que dans la méthode  
Quant à `readonly` lisible en dehors que la classe, mais non modifiable

```ts
class Book {
    private bookID = 88
    readonly libraryName = "The Book Shelf" // ne peut pas être changer

    constructor( // Pour le readonly
        public title: string, // si on met public aux paramètres (propriété et définir les types) de la fonction constructeur
        public price: number,
        public dateOfParution: string,
        public author: string,
        public theme?: string[]
    ) {} // C'est un racourci qui fonctionne pareil

    promo(){
        console.log("ID", this.bookID);
        console.log("NAME", this.libraryName);
        // this.libraryName = 500
        
        return this.price * 0.5;
    }
}

const book1 = new Book("The Great Gatsby", 20, "11/04/1955", "Tom Joe");
console.log(book1);
console.log(book1.promo());
console.log(book1.libraryName);


const addToShelter = (obj: Book) => {
    console.log("ADDED TO SHELTER", obj);
}
addToShelter(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))

let onlyBook : Book[] = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))
console.log(onlyBook);

let onlyBook : Book[] = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))
console.log(onlyBook);
```

Syntaxe sans raccourci
```ts
class Book {
    title: string;
    price: number;
    dateOfParution: string;
    author: string;
    theme?: string[];
    private bookID = 88
    readonly libraryName = "The Book Shelf"

    constructor(t: string, p: number, dop: string, a: string, th?: string[]) {
        this.title = t;
        this.price = p;
        this.dateOfParution = dop;
        this.author = a;
        this.theme = th;
    }

    promo(){
        console.log("ID", this.bookID);
        console.log("NAME", this.libraryName);
        this.libraryName = 500
        
        return this.price * 0.5;
    }
}
```