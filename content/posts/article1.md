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
    Content: Welcome to my blog
### styles test
    
    <!-- Styles 
{{- $anoldhope := resources.Get "css/an-old-hope.min.css" | minify }}
{{- $theme := resources.Get "css/theme-vars.css" | minify }}
{{- $reset := resources.Get "css/reset.css" | minify }}
{{- $header := resources.Get "css/header.css" | minify }}
{{- $main := resources.Get "css/main.css" | minify }}
{{- $postentry := resources.Get "css/post-entry.css" | minify }}
{{- $postsingle := resources.Get "css/post-single.css" | minify }}
{{- $terms := resources.Get "css/terms.css" | minify }}
{{- $archive := resources.Get "css/archive.css" | minify }}
{{- $footer := resources.Get "css/footer.css" | minify }}
{{- $404 := resources.Get "css/404.css" | minify }}
{{- $style := slice $theme $reset $header $main $postentry $postsingle $terms $archive $footer $404 | resources.Concat "stylesheet.css" | minify }}
{{- $stylesheet := slice $anoldhope $style | resources.Concat "css/stylesheet.css" | minify | fingerprint }}
<link href="{{ $stylesheet.Permalink }}" integrity="{{ $stylesheet.Data.Integrity }}" rel="preload stylesheet"
    as="style">
{{- if (and (.Site.Params.profileMode.enabled) (.IsHome)) }}
{{- $profileMode := resources.Get "css/profile-mode.css" | minify | fingerprint }}
<link href="{{ $profileMode.Permalink }}" integrity="{{ $profileMode.Data.Integrity }}" rel="preload stylesheet"
    as="style">
{{- end }}-->

#### suite

<!--- Style Officiel 2 regroupé 
    # Fonctionne mais applique tout au centre de la page.
    # Donc fonctionne mal.

{{- $all := resources.Get "css/style.css" | minify }}
{{- $stylesheet := slice $all | resources.Concat "css/stylesheet.css" | minify }}
<link href="{{ $stylesheet.Permalink }}" rel="stylesheet">
-->


## config.toml Console theme

[params]
  # Cutting off the page title to two chars for mobile (console-demo -> co)
  titleCutting = true

  [[params.navlinks]]
  name = "about/"
  url = "about/"

  [[params.navlinks]]
  name = "posts/"
  url = "posts/"
  
  [[params.navlinks]]
  name = "photos/"
  url = "photos/"

  ### config.yaml console theme

  / il casse le home info du papermod

  # menu du thème console
params:
  navlinks:
    - name: apropos/
      url: apropos/
    - name: posts/
      url: posts/
    - name: categories/
      url: categories/
      # menu du thème console
      
  navlinks:
    - name: apropos/
      url: apropos/
    - name: posts/
      url: posts/
    - name: categories/
      url: categories/
      
### Schema papermod 

* layouts  
  404.html  
  sitemap.xml  
  * shortcodes  
    blockquote.html  
    collapse.html  
    rawhtml.html  
    youtube.html  
  * myarchivetype  
    single.html  
  * partials  
    comments.html  
    footer.html  
    head.html  
    header.html  
    home_info.html  
    index_profile.html  
    share_icons.html  
    social_icons.html  
    svg.html  
    toc.html  
  * _default  
    terms.html  
    single.html  
    list.html  
    baseof.html  
    archives.html  
    * _markup  
      render-image.html  
      render-link.html  
    
    <!-- Generator -->
{{- hugo.Generator }}