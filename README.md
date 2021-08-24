# Criminau.xyz

Blog Simple.

En savoir plus :   <https://criminau.xyz/apropos/>


[![Netlify Status](https://api.netlify.com/api/v1/badges/f6104326-809a-4b92-8914-4a7a34467c5c/deploy-status)](https://app.netlify.com/sites/criminau-site/deploys)


## Prochaine version

### V.02.5

- [x] Protocole Revenge.css
- [X] Protocole totA11y
- [x] Etudier vitesse des Images
- [X] Optimisation de la vitesse de chargement avec twitter
-
-

---

<blockquote>Quelques taches :</blockquote>

Acme Website task list
 - [ ] Optimiser la vitesse des Images
 - [ ] Etudier retour des catégories
 - [ ] Que faire des brouillons ?
 - [ ] Etudier pour changer la taille de police par rapport taille de l'écran
 - [ ] Protocole wave.webaim.org
 - [ ] Protocole tachyons-x-ray
 - [ ] Enable contact us
 - [ ] Enable contact us
 - [ ] Enable contact us


---
/*
hugo netlify toml :
--buildDrafts
https://talk.commonmark.org/t/tables-in-pure-markdown/81/115

https://github.com/alex-shpak/hugo-book

*/
---

### Tools
css/revenge.css
{{- $revenge := resources.Get "css/revenge.css" }}
<link href="{{ $revenge.Permalink }}"  rel="preload stylesheet">
---
