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
- [X] Redirect 301 du domaine netlify vers criminau.xyz
- [X] Cache control politique 1 an.
- [X] Définir une politique à propos des images
- [ ] Vérification des articles et retour des pdf  [progressivement]
- [ ] Nouveaux url avec caractère lisible [progressivement]

- [X] Définir une politique à propos des images
- [ ] Optimiser la vitesse de chargement des images
- [ ] Optimiser la lecture et l'affichage des images
---

<blockquote>Quelques taches :</blockquote>

- [ ] Protocole wave.webaim.org
- [ ] Protocole tachyons-x-ray
- [ ] Etudier pour changer la taille de police par rapport taille de l'écran
- [ ] Définir une politique à propos des brouillons
- [ ] Définir une politique à propos des catégories



<blockquote>Politiques :</blockquote>

- [ ] Des catégories :
 -
 -
- [ ] Des brouillons :
 -
 -
- [x] De la taille de la police d'écriture, responsive.
 - responsive
 - lisible


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
