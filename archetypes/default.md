---
title: "{{ replace .Name "-" " " | title }}"
author: "{{ .Site.Params.Author }}"
slug: "{{ .Name }}"
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
date: {{ .Date }}
cover:
    image: "media/sky-cover.avif"
    alt: "Description de l'image"
    caption: "Légende"
images: "media/sky-cover.avif"
keyword: ""
tags: ["",""]
categories: ["",""]
series: ["",""]
pdfname: "{{ .Name }}"
---

<!--more-->
