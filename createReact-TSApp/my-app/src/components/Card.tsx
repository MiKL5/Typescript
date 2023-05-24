import React from 'react'

type CardProps = { // type personnalisé
    title = string;
    content = string;
}

// export default function card(props: CardProps) { // indiquer qu'on reçoit des props et lier avec CardProps
export default function card({title, content}) { 
    return (
        <div>
            <h1>{title}</h1>
            <h1>{content}</h1>
        </div>
    )
}
