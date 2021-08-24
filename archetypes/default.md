---
title: "{{ replace .Name "-" " " | title }}"
author: "{{ .Site.Params.author }}"
url: titre-de-l-article-caractere-simple.html
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
noindex: false
date: {{ .Date }}
cover:
    relative: false
    image: "media/"
    alt: "Description de l'image"
    caption: "Légende"
images: "media/"
keyword: ""
pdfname: "{{ replace .Name "-" " " | title }}"
---

<!--more-->
