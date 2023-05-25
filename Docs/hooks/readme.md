<div align="center"><h1><b>Utiliser une liste, des refs, events, ...</b></h1></div>

_App.tsx_
```tsx
import React {useState, useRef, useEffect} from 'react';
import Card from './components/Card';

function App() {

  const [cardsData, setCardsData] = useState([
    {
      title: "Matisse",
      content: "Peintre du XXème siècle",
      id: 0
    },
    {
      title: "Van gogh",
      content: "Peintre du XIXème siècle",
      id: 1
    }
  ])

  const btnRef = useRef<HTMLButtonElement>(null) // useRef est un generic, il faut lui dire de prendre des boutons
  // démarre à null car qd useState s'exécute, la div ne le sera pas encore pour éviter les erreurs

  useEffect(( => { // exécute la fonction callback seulemnt qd le composant à fini de se monter
    console.log(btnRef);

    cont handleResize = (e: Event) => {
      console.log("RESIZED", e);
    }

    window.addEventListener('resize, handleResize');

    return () => { // cleanup lorque le composant se détruit
      window.removeEventListener('resize, handleResize')
    }
  }))

  return (
    <div className="App">
      {cardsData.map(((item) =>)( // avec les () le return est sous entendu mais avec les accolades, il faut mettre le return
        <Card key={item.id} title={item.title} content={item.content}
        ))}
      {/* <Card title="La carte" content="Le contenu" /> */}
      <button ref={btnRef}>Submit</button>
    </div>
  );
}

export default App;
```