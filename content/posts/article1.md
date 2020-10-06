---
title: "Article1"
author: subversive.eu
ShowToc: true
draft: true
hidemeta: false
tocopen: false
disableShare: false
categories:
 - Démocratie
date: 2020-09-30T17:44:04+02:00
cover: "https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png"
---

Cet article permet de tester des markups, des shortcodes, des variables et environnements

<!--more-->
## Image

![Drag Racing](/media/logo.png "coucou")

![](/media/roman300AD.png "roman empire")

## PostMeta

links :  
<a name="Télécharger" href="/pdf/{{ .Title }}.pdf" target="_blank" rel="noopener noreferrer" download>télécharger le pdf</a>
&nbsp;·&nbsp;
<a name ="Imprimer" href="javascript:if(window.print)window.print()">imprimer</a>
&nbsp;·&nbsp;
<a name="Télécharger" href="/epub/{{ .Title }}.epub" target="_blank" rel="noopener noreferrer" download>télécharger format epub</a>

## Cover for a post

cover = "<absolute image url>"
  can also paste direct link from external site
  ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png

/ Permet d'ajouter une image au post.

## youtube

{{< youtube DWcJFNfaw9c >}}

## tweeter

{{< tweet 877500564405444608 >}}

## vimeo

{{< vimeo 146022717 >}}

## Instagram
{{< instagram BWNjjyYFxVx hidecaption >}}
{{< instagram BWNjjyYFxVx >}}

## Footer hugo theme


    <span>Powered by <a href="https://gohugo.io/" rel="noopener noreferrer" target="_blank">Hugo️️</a>️</span>
    <span>&middot;</span>
    <span>Theme️ <a href="https://git.io/hugopapermod" rel="noopener" target="_blank">PaperMod</a></span>
