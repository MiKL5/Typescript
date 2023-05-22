interface Rocket {
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void
}

type Rocket2 = {
    reactors: number;
    vMax: number;
    takeOff: (action: string) => void
}

interface Rocket {
    price: number;
    fuel: number;
}

class RocketFactory implements Rocket {
    reactors: number;
    vMax: number;
    price: number;
    fuel: number;

    constructor(r: number, vMax: number, p: number, f: number) {
        this.reactors = r;
        this.vMax = vMax;
        this.price = p;
        this.fuel = f;
    }
    takeOff(action: string){
        console.log(action);
    }
}
const Falcon1 = new RocketFactory(12,900,2,9000)
console.log(Falcon1);
Falcon1.takeOff('Décollage')