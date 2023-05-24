<div align="center"><h1><b>Les interfaces et les classes</b></h1></div>

L'interface peut être réutilisée par toutes les classes  
Afin de créer autant de classe que nécessaire  
Et les classes peuvent-être étendues  
C'est plus efficace ; il n'y a pas besoin de répéter
```ts
interface Country {
    name: string;
    population: number;
    lang: string[] 
}

class Norway implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[],
        public Capital: string
    ) {}
}
const NorwayData = new Norway('Norway', 9, ["norsk"], "Oslo")
console.log(NorwayData);


class France implements Country {
    constructor(
        public name: string,
        public population: number,
        public lang: string[]
    ) {}
}
const FranceData = new France('France', 70, ["Français", "Breton","Basque"])
console.log(FranceData);

class Aquitaine extends France {}
const AquitaineData = new Aquitaine("Aquitaine", 4, ["Français", "Basque","Gascon"])  // hérite de France
```