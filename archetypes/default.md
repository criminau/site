---
title: "{{ replace .Name "-" " " | title }}"
author: "{{- .Params.author | default .Site.Params.author }}"
ShowToc: false
draft: false
categories:
 - 
date: {{ .Date }}
---

<!--more-->
