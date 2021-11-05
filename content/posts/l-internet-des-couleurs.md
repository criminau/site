---
title: "L'Internet Des Couleurs"
author: "criminau"
slug: "l-internet-des-couleurs"
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
date: 2021-11-05T13:55:40+01:00
keyword: ""
pdfname: "l-internet-des-couleurs"
---

A la recherche des couleurs idéales.

Un vrai casse-tête.
<!--more-->

## Introduction

Toutes les couleurs sont sur internet. Mais toutes ne sont pas idéales. Trouver les bonnes couleurs est un vrai casse tête. Ces notes permettront de mieux y voir, c'est le cas de le dire !

## Pré-requis

- Un bon contraste de 8 minimum.
- Des couleurs qui ne fatiguent pas les yeux.

# Contraintes

- Obligé d'utiliser javascript pour avoir deux thèmes (sombre et éclairé).
- Il faut également faire une croix sur le design et la déco.
- De même pour les démarches publicitaires et commerciales. (les couleurs rouge et bleu par exemple).

Ce document est donc rédigé en deux parties, une claire et une sombre. Le sombre est particulier mais il fonctionne très bien.

## Conditions

- En apprendre plus, car la documentation en français est vide à ce sujet.


rgba  
rgb  
hex /css  

- Un ratio minimum de 8.5 est souhaitable pour une utilisation minimale adaptée aux personnes avec handicap.
- Les ratios sont réversibles.

## Côté clair
### Couleur de FOND
LightGray 	D3D3D3 	211,211,211  
[couleur web lightgray rgb hsl hexa](https://web-color.aliasdmc.fr/couleur-web-lightgray-rgb-hsl-hexa.html)  
[couleurs gris](http://www.letoileauxsecrets.fr/couleurs/couleurs-gris.html)  
[nuances de couleurs](https://www.w3schools.com/colors/colors_shades.asp)    

### Couleur de CONTENU
1)  
Black 	000000 	0,0,0

2)  
Orange :  
F08000 240, 128, 0  
EE8000 238, 128, 0  
239,128,0  
[nuances d'orange code, html, hex, rgb](https://www.color-meanings.com/shades-of-orange-color-names-html-hex-rgb-codes/)  
[orange](https://colorcodes.io/orange/)  
[couleur orange](http://www.letoileauxsecrets.fr/couleurs/couleurs-orange.html)  

3)  
Magenta 	FF00FF 	255,0,255  
Green 	008000 	0,128,0  
Black 	000000 	0,0,0  
85,43,85  

Black&Magenta  
Green  
Black  
0,43,85  

### Analyse

Contrast ratio  
theme = LG = 211,211,211  
B = 0,0,0  
O = 239,128,0  
MGB = 85,43,85  
B&MGB = 0,43,85  

LG/B = 14.2  
LG/O = 1.8  
LG/MGB = 7.52  

B/MGB = 1.86  
B/O = 7.75  

MGB/O = 4.16  

LG/B&MGB = 9.49  

Les meilleurs : LG/B, LG/B&MGB, B/O, LG/MGB  

Ici on observe que l'on a le choix puisque deux ratios > 8.5, on a donc de l'esthétiques à faire.

J'ai choisi :  
Theme = LG  
Contenu = B&MGB  
Primaire = B  


## 2
### Couleur de fond
[couleur web bleu foncé rbg hsl hexa](https://web-color.aliasdmc.fr/couleur-web-darkblue-rgb-hsl-hexa.html)  
[couleur bleu](http://www.letoileauxsecrets.fr/couleurs/couleurs-bleu.html)

DarkBlue 	00008B 	0,0,139

### Couleur de CONTENU

Gold 	FFD700 	255,215,0  
Magenta 	FF00FF 	255,0,255  
255,0,127  

Lavender 	E6E6FA 	230,230,250  
Yellow 	FFFF00 	255,255,0  
Cyan 	00FFFF 	0,255,255  
162,246,168

White 	FFFFFF 	255,255,255  
Gold 	FFD700 	255,215,0  
Green 	008000 	0,128,0  
170,199,85  

source brute :  
[Test de la couleur Magenta](https://www.quackit.com/html/codes/color/color-tester.cfm?colorName=Magenta)

### Analyse

theme: 00008B;  
entrée: rgb(162,246,168);  
primaire: rgb(170,199,85); /*WGG WGC/DB=8.1  WGG/LYC=1.47 WGG/GM=1.98 */  
contenu: rgb(162,246,168); /*LYC LYC/DB=11.86  LYC/GM=2.92 LYC/WGG= 1.47 */  
secondaire: rgb(255,0,127); /*GM GM/DB=4.04 */  

Ici on observe nous n'avons pas encore le choix puisque 1 ratio > 8.5, on a donc :

J'ai choisi :  
Theme = DB  
Contenu = LYC  
Primaire = WGG  
Secondaire = GM  

## Selection

### Mode clair

Je conserve la version LG pour le fond et B&MGB pour l'écriture.

Voici donc la configuration choisi :

theme: D3D3D3;  
contenu: rgb(0,43,85);  
couleur de fond pour le code: 1c1d21;  
couleur de fond pour le code 2: 1c1d21;  
couleur pour le code: rgb(204,204,204);  


### Mode sombre

Bref après de multiple test en interne je conserve au chaud cette configuration :

theme: 00008B;  
contenu: rgb(162,246,168);  
couleur de fond pour le code: 00003B;  
couleur de fond pour le code 2: 2e2e33;  
couleur pour le code: rgb(204,204,204);  

Mais j'applique celle-ci qui est l'inverse du mode éclairé :

theme: rgb(0,43,85);  
contenu: D3D3D3;  
couleur de fond pour le code: 1c1d21;  
couleur de fond pour le code 2: 1c1d21;  
couleur pour le code: rgb(204,204,204);  

## A EVITER
Les couleurs de caractères à éviter, peu importe la couleur de fond, sont le bleu, le rouge et le violet.  Ce sont des couleurs très difficiles à distinguer pour l'oeil.  Les couleurs de fond rouge, jaune et leurs dérivés (p. ex. : le vert, l'orange...) sont à proscrire totalement.

Pour terminer, voiçi une liste d'agencement de couleurs à éviter dans toutes vos publications, que ce soit pour les caractères/fond ou les caractères/caractères.

Rouge avec bleu ;  
Jaune avec violet ;  
Jaune avec vert.  

## Anciennes couleurs utilisée d'un thème clair

Déjà, l'on pouvait observer des couleurs disons calme. Loin du rouge, bleu et violet.  
primaire:  
rgba(0, 0, 0, 0.88);  
secondaire:  
rgba(0, 0, 0, 0.56);

## Pour penser plus loin

Je ne sais pas si le travail est fiable ou non.  
Par simplicité j'ai organisé deux couleurs en contraste minimal requis (4.95) pour le design.  
Dans ces notes il y a la prise en compte de plusieurs couleurs simultanément en contraste.  
Vous me direz, pourquoi ne pas avoir tout simplement inversé les rapports, je n'y ai pas pensé, il faudrait l'essayer.

## Outils

Celui-ci permet d'afficher la couleur depuis un code rgb :  
[W3 Schools color](https://www.w3schools.com/colors/colors_rgb.asp)  
Celui-ci permet de calculer un contraste :  
[Contraste et ratio](https://contrast-ratio.com/)
