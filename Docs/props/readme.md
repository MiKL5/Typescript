<div align="center"><h1><b>Utiliser les props</b></h1></div>

Avec TypeScript les props doivent être typées  
Pour cela, il y a 2 solutions :
* les types perso ;
* les interfaces ;

#### _Card.tsx_
```tsx
import React from 'react'

type CardProps = { // type personnalisé
    title = string;
    content = string;
}

export default function card(props: CardProps) { // indiquer qu'on reçoit des props et lier avec CardProps
console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.content}</h1>
        </div>
    )
}
```
Il est possible de faire du destructuring pour ne plus écrire 'props.*'
```tsx
export default function card({title, content}) { 
console.log(props);
    return (
        <div>
            <h1>{title}</h1>
            <h1>{content}</h1>
        </div>
    )
}
```