---
title: "{{ replace .Name "-" " " | title }}"
author: "{{- .Params.author | default .Site.Params.author }}"
ShowToc: true
draft: false
categories:
 - 
date: {{ .Date }}
---

<!--more-->
