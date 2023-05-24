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
// console.log(book1);
// console.log(book1.promo());


const addToShelter = (obj: Book) => {
    console.log("ADDED TO SHELTER", obj); // ajouté à l'abris
}
// addToShelter(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))

let onlyBook : Book[] = [];
onlyBook.push(new Book("Nana", 5, "12/07/1905", "Zola", ["Roman Historique", "Roman"]))
console.log(onlyBook);
