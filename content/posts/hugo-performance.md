---
title: "Hugo 100% Lighthouse"
author: "subversive"
slug: "hugo-100-lighthouse"
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
date: 2021-03-10T18:00:00
cover:
    image: "media/lighthouse-100x4.jpg"
    alt: "100% Lighthouse perf !"
    Caption: "100% Lighthouse perf !"
images: "media/lighthouse-100x4.jpg"
keyword: "hugo, static, web, site, internet, performance, efficience, lighthouse, google chrome, chrome tools, seo, accessibilité, meilleures pratiques, vitesse, site internet, rapidité, best practices, hugo"
pdfname: "hugo-100-lighthouse"
---


Une fois le [site hugo créé](https://criminau.xyz/creer-un-site-internet-statique-en-2020.html), il ne sera pas optimisé, consommant des ressources inutilement, offrant peu de confort aux visiteurs.
<!--more-->

## Introduction

En commençant avec hugo, si vous cherchez un petit peu sur le net, vous entendrez parler de lighthouse.
C'est un outil, fiable et simple d'utilisation pour noter votre site.

Cet outils prendra en compte la *performance* de votre site, *l'accessibilité*, *les meilleures pratiques*, *le SEO* et si votre site est une application.

Tout est résumé sur [awesome-hugo-book](https://criminau.github.io/awesome-hugo-book/).

Nous aborderons les détails.

## Vocabulaire

Le terme "performance" est sujet à confusion, car il peut s'agir de plusieurs domaines ou bien d'un ensemble de domaines.

Dans cet article, nous nous concentrerons sur la capacité du site sous hugo à afficher n'importe qu'elle page du site, le plus rapidement possible avec la plus faible connexion possible, consommant donc moins d'énergie et améliorant le confort. Cela est l'efficience du site.

La performance serait plutôt l'objectif que vous êtes fixé avec une mesure quantifiable par rapport à une unité de temps.

Ainsi l'on nomme par erreur la performance d'un site web pour aborder son efficience.

L'accessibilité concerne les consignes pour offrir à tous la possibilité de naviguer sur le web.

Le SEO viens de l'anglais Search Engine Optimization, l'optimisation dans les moteurs de recherches.

Cet outil ne juge pas votre contenu, cela se fait par l'affluence sur votre site et les algorithmes de Google qui ne sont pas open source.

## Utilisation

Installer chromium sur votre OS (peu importe, disponible n'importe où).
N'ajoutez pas d'extensions qui utilisent des ressources du site.

Quelques Outils et Astuces :

- [Viewport Resizer – Responsive Testing Tool](https://chrome.google.com/webstore/detail/viewport-resizer-%E2%80%93-respon/kapnjjcfcncngkadhpmijlkblpibdcgm?hl=fr)
- [Dimensions](https://chrome.google.com/webstore/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj?hl=fr)
- [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=fr)
- Le site [mydevice.io](https://www.mydevice.io/) complet.
- Utilisez la navigation privée pour ne pas utiliser le cache.

Lancer le site avec ``` hugo server ```

Visitez le site avec chromium puis faites CRTL+MAJ+I ou bien dans les trois points alignés verticalement en haut à droite -> Plus d'Outils -> Outils de développement -> Lighthouse.

Vous aurez le choix entre version ordinateur portable ou mobile.

## Performance

Rien à rajouter [des consignes hugo-book](https://criminau.github.io/awesome-hugo-book/#performance)

## Accessibilité

- Contraste élevé entre le fond et la couleur de la police d'écriture.
- Balise `<title>`
- [lang] attribute for `<html>`


```html
<html lang="{{ .Site.Language }}">
```
Dans config.yml :
```yml
languageCode: fr-FR
DefaultContentLanguage: fr
```
- Attributs [alt] pour les images et vidéos, [name] pour les boutons et [title] pour les liens.
```html
<button name="Description du bouton" ></button>
```

- N'oubliez AUCUN attributs.
- Sur mobile ou tablette pensez aux espaces entre chaque lien ou bouton.

## Meilleures pratiques

- Protocole https
- Ajouter  `rel="noopener"` ou `rel="noreferrer"` pour TOUS les liens.
- HTML5 doctype

## SEO

- Copier le [head.html](https://raw.githubusercontent.com/criminau/site/master/themes/theme-1/layouts/partials/head.html)
- Plus de détails sur la [liste awesome-hugo-book](https://criminau.github.io/awesome-hugo-book/#contenu)

Lisez bien avec attention le OpenGraph Protocol + Les twitters Cards, et schema.org.
Le fichier robots.txt et le sitemap.xml.

## De manière générale

C'est assez simple en soit, suivez simplement les conseils lorsque vous avez une critique, une recherche sur le net et hop.  
Concentrez vous sur la page d'accueil de votre site avant de commencer à travailler sur les autres pages.

Puis les pages simples, sans images, ou vidéos, ou autres, juste du texte. Ensuite, observez les pages plus complexes.

Pour les plus curieux vous avez tout sur [web.dev](https://web.dev).

### Exemple

{{< iframepdf lighthouse-report >}}

Pour les templates SEO, pensez a bien respecter l'architecture ainsi que le langage, de même pour le flux rss.
