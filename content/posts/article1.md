---
title: "Article1"
author: subversive.eu
ShowToc: true
draft: true
categories:
 - Démocratie
date: 2020-09-30T17:44:04+02:00
fig_width: 6 
fig_height: 4 
---

# Sauvegarde
## Image
<img src="/media/2018/08/kitten.jpg" alt="Kitten"
	title="A cute kitten" width="150" height="100" />
![Kitten](/media/2018/08/kitten.jpg "A cute kitten")
![Kitten](/media/2018/08/kitten.jpg =150x100)

![Drag Racing](/media/logo.png "coucou")
/grandeur nature test

![](/media/roman300AD.png "roman empire")

## PostMeta

links
<a name="Télécharger" href="/pdf/{{ .Title }}.pdf" target="_blank" rel="noopener noreferrer" download>télécharger le pdf</a>
&nbsp;·&nbsp;
<a name ="Imprimer" href="javascript:if(window.print)window.print()">imprimer</a>
&nbsp;·&nbsp;
<a name="Télécharger" href="/epub/{{ .Title }}.epub" target="_blank" rel="noopener noreferrer" download>télécharger format epub</a>
  
## head 
* RSS
<link rel="alternate" type="application/rss+xml" href="https://subversive.eu/posts/index.xml" title="subversive.eu">
{{- range .AlternativeOutputFormats -}}
{{- printf `<link rel="%s" type="%s" href="%s" title="%s" />` .Rel .MediaType.Type .Permalink $.Site.Title | safeHTML }}
{{- end -}}

## Cover for a post

cover = "<absolute image url>"
  can also paste direct link from external site
  ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png

/ Permet d'ajouter une image au post.

## youtube


/ dernier test

{{< youtube DWcJFNfaw9c >}}

## tweeter

{{< tweet 877500564405444608 >}}

## vimeo

{{< vimeo 146022717 >}}

## Instagram
{{< instagram BWNjjyYFxVx hidecaption >}}
{{< instagram BWNjjyYFxVx >}}
# END
AdwCleaner

Roguekiller

Ucheck


ZHPdiag


Diag adlice

ZHPCleaner

ZHPSuite

Geek uninstaller

Treesize

Bleachbit

HDD wipe tool

Aomei
Iobit

baseURL: 'http://www.subversive.eu/'

title: subversive.eu

author: subversive.eu

paginate: 5

languageCode: fr

DefaultContentLanguage: fr

enableInlineShortcodes: true

theme: PaperMod

params:
  description: 'Theme PaperMod -
   https://github.com/adityatelange/hugo-PaperMod'
  ShowReadingTime: true

  contentTypeName: posts

  defaultTheme: dark

  ShowShareButtons: true





  homeInfoParams:

    Title: "Bienvenue"

    Content: Welcome to my b
    log