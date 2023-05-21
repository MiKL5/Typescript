# **Typescript** <img align="right" src="../Assets/images/Typescript_logo_2020.svg" alt="TypeScript" title="TypeScript" widht="auto" height="64px">

## **C'est quoi Typescript ?**

TypeScript est un langage sur JavaScript (on parle de superset) c'est-à-dire que le code TS sera ensuite compilé en JavaScript.  

Il a été créer dans le but d'ajouter des fonctionnalités, notamment au niveau des types (plus de typage = moins d'erreur, car ce langage est plus strict).  
TS peut donner des types précis aux variables, paramètres, classes, et cætera.  
D'où son nom, restreindre le champ des possibles, donc, des erreurs possibles.

## **Comment ça fonctionne ?**

On code dans un fichier `.ts` ou `.tsx`.  
Puis c'est compiler en JavaScript.  
En suite, on peut envoyer les fichiers JS à des serveurs.  
Lors de la compilation, il est possible de choisir la version ECMAScript (ES5, ES6, ...).  

## **Comment installer TS ?**

`npm install -g typescript`  
`-g` Pour une installation globale.

## **Comment compiler ?**

Entrer dans un terminal[¹], `tsc` suivi du nom du fichier, comme `tsc script.ts`.  
Pour compiler, choisir les paramètres de compilation, `tsc --init ` et ça créer un fichier `tsconfig.json`.  
Pour regarder en permanence les changements et actualiser le `js` `tsc -w`.  

___
>>> NOTE BENE  
Éviter d'ouvrir les fichiers `ts` et `js` en même temps, car il prend en compte que l'on crée deux fois les variables.

[¹] `ctrl`+`ù` pour ouvrir un terminal dans VSCode.
___

<div align="center">

[Les types de base](types)

[Les tableaux et les objets]()

</div>