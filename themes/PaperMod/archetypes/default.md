---
title: "{{ replace .Name "-" " " | title }}"
author: "{{ .Site.Params.author }}"
draft: false
ShowToc: true
hidemeta: false
comments: true
disableShare: false
tocopen: false
noindex: false
date: {{ .Date }}
cover:
    image: "media/"
    alt: "Description de l'image"
    caption: "Légende"
images: "media/"
keyword: ""
pdfname: "{{ replace .Name "-" " " | title }}"
---

<!--more-->
