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
Pour tout compiler `tsc`  
Pour regarder en permanence les changements et actualiser le `js` `tsc -w`.  

___
>>> NOTE BENE  
Éviter d'ouvrir les fichiers `ts` et `js` en même temps, car il prend en compte que l'on crée deux fois les variables.

>[¹] `ctrl`+`ù` pour ouvrir un terminal dans VSCode pour Windows.
___

<div align="center">

> ### **Les bases**
<br>

[Les types de base](types)

[Les tableaux et les objets](arrayAndObject)

[Les fonctions](function)

[Les unions et types personnalisés](unionsEtTypesPerso)

[Tuple et Enum](tupleEnum)

[Les interfaces](interface)

[Le DOM](dom)

[TSConfig](tsConfig)

<br>

> ### **Avancé**
<br>

[Astuces pour les types personnalisés et les interfaces](tipsTypesInterface)

[Les opérateurs](tipsTypesInterface)

[La `functin overload`](overload)

[Les `Generics`](generics)

<br>

> ### **Orienté objet**
<br>

[Les classes de base](class)

[Les champs et le raccourci](fieldsAndShortcut)

[Les interfaces et les classes](interfaceAndClass)

<br>

> ### **TypeScript avec React**
<br>

[Installation](installTR)

[Utiliser les props](props)

[Utiliser une liste, des refs, des events, etc](hooks)

<br>

---
> ### **Exercices**
<br>

[Convertir les degrès Celsius en Fahrenheit _(if/else)_](../Exercices/1_convertirCelsuis)  
[Convertir les degrès Celsius en Fahrenheit _(do/while)_](../Exercices/1_convertirCelsuis-DoWhile)

</div>