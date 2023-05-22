<div align="center"><h1><b>TSConfig</b></h1></div>

Le fichier `tsconfig.json` sert à configurer l'environnement de travail par rapport à la compilation des fichiers, la version d'ECMAScript (spécifications, normes, versions…).

En ES5, certaines fonctionnalités n'ont pas de traduction.

On peut exclure des fichiers ou dossiers de la compilation ; avant la dernière accolade fermante, on peut faire
```json
"exclude": [
    "./assets.ts",
    "src/analystics.ts",
    ]
"skipLibCheck":
true
```
```json
"include": [
    "src" // n'iclu par le fichier exclu
]
```
On peut aussi compiler dans un autre dossier.
```json
"routDir": "./src",
```
On peut avoyé les fichiers javascript dans `public`
```json
"outDir": "./public",
```