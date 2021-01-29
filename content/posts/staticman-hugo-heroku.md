---
title: "Ecrire des commentaires sur un site statique (hugo) avec staticman et heroku"
author: "subversive.eu"
ShowToc: true
draft: true
hidemeta: false
tocopen: false
disableShare: false
comments: true
date: 2021-02-05 18:00:00
keyword: ""
pdfname: ""
---

Bonjour ! 

Tutoriel pour permettre l'écriture de commentaires sur un site internet statique avec [hugo cms](https://gohugo.io/), [staticman](https://staticman.net/docs/) et [heroku](https://www.heroku.com/).
<!--more-->
Objectif, offrir a vos visiteurs la possibilité d'écrire des commentaires (ou autres) sans passer par un organisme tel que Graphcomment ou Disqus,... Ainsi vous respectez la vie privée de vos utilisateurs.

Tous les tutos disponibles sur le net (que j'ai lu) sont en anglais, ils datent et certains liens ne fonctionnent plus, bref j'ai du faire un mix de tuto pour y arriver, du coup je vous propose un tuto en français.

N'oubliez jamais que ce qui fonctionne est sur les codes sources des sites. En ce sens si vous copiez-collez et qu'il y a une erreur, cherchez la mise à jour dans le code source sur github.

## Requis

Votre compte github principal.  
Un compte github vérifié qui sera votre bot (ex: githubbot). Conservez les identifiants et mots de passe.  
Un compte vérifié [heroku](heroku.com). Conservez les identifiants et mot de passe.  
Heroku cli.

J'utilise [heroku pour ubuntu 20.04](https://snapcraft.io/install/heroku/ubuntu), les commandes sont un petit peu différentes mais la procédure reste la même.

Considérant que vous souhaitez installer staticman sur votre site, vous avez donc la capacité de gérer correctement votre site sous hugo (ou autre), de traduire les .toml en .yml et vice versa.

Bien il vous faudra de la patience pour ne manquer aucune étape.

Commençons !

## Compte githubBOT

Connectez vous à votre compte github BOT, allez dans paramètres du compte (settings du compte) -> Developer settings -> Personal access tokens -> Generate new token.

Nommez le, sélectionnez (select scopes) : repo (tous) + user (tous) => Generate token. SAUVEGARDEZ bien votre token sur un fichier txt.

## Application Heroku

[Télécharger staticman via github](https://github.com/eduardoboucas/staticman) avec le lien https :

```
git clone https://github.com/eduardoboucas/staticman.git
```

Allez dans le dossier staticman.  
Créez un fichier, nommez-le "Procfile", insérez-y "npm start".

Créez une clé RSA :

```
openssl genrsa -out key.pem
```

Créez un fichier, nommez-le "config.production.json", insérez-y :

* notes :
 - votretoken ressemble a celui ci : b81f780f9f5f3be15a5595e618379756344cdsdk2
 - rsakey, collez l'intégralité du fichier key.pem

```
{
  "githubToken": "votretoken",
  "rsaPrivateKey": "-----BEGIN RSA PRIVATE KEY\n-----la clé entier-----\nEND RSA PRIVATE KEY-----",
  "port": 8080
}
```

Connectez votre compte heroku avec :

```
heroku login
```

Toujours dans le dossier cloné plus haut (staticman), créez une application heroku :

```
heroku create nomdevotreapplication
```

### Configuration

votretoken ressemble a celui ci : b81f780f9f5f3be15a5595e618379756344cdsdk2

```
heroku config:set NODE_ENV="production"
heroku config:set GITHUB_TOKEN="votretoken"
heroku config:set RSA_PRIVATE_KEY="$(cat ./key.pem)"
```

Créez une branche de production :

```
git checkout -b production 55d1430
```

Ajoutez dans le fichier .gitignore pour ignorer le fichier configuration.  
"!config.production.json"

### Déploiment

```
git add .
git commit -m "Set up Staticman v3 for deployment to Heroku"
git push heroku production:master
```

Si tout c'est bien passé, en se rendant sur <https://nomdevotreapplication.herokuapp.com/> vous devez lire :

Hello from Staticman version 3.0.0!

Votre app est disponible.

## API sur github

Connectons votre githubBOT avec votre compteGITHUBprincipal.

Pour cela, depuis le dépôt de votre site, allez dans "settings" (paramètres de ce répertoire) -> Manage Access -> Invite a colaborator -> yourgithubBOT -> Invite.

Acceptez l'invitation via le mail de votre githubBOT.

## API ponts et config

J'ai choisi volontairement de désactiver la modération, mais faites à votre guise.  

```
moderation: true
```

Cela va créer une "pull request"

A la source (LA RACINE) de votre site, créez un fichier "staticman.yml" , insérez-y [ce qu'il y a dans le miens](https://github.com/subversive-eu/site/blob/master/staticman.yml)

Dans votre fichier config.yml, ajoutez ou complétez :

```
params:
  comments: true
  staticman:
    api: 'https://nomdevotreapp.herokuapp.com/v2/entry/githubprincipal/repositorydusite/master/comments'
```

Ajoutez également un dossier /data/ puis /comments/ et un fichier .gitkeep.  
Cela permet de maintenir le git push avec les dossiers. Essayez sans, les dossiers vides ne suivront pas sur github.

La variable "comments" vous permet de désactiver les commentaires simplement, vous pouvez aussi l'utiliser dans les params d'un article (ou page : comments: false).

## Afficher et écrire des commentaires depuis le site

### default

Dans layout/_default/single.html insérez :

```
  {{- if and ($.Site.Params.comments) (ne .Params.comments false) }}
  {{- partial "comments.html" . }}
  {{- end }}
```

Exemple ici avec [cette option](https://github.com/subversive-eu/site/blob/master/themes/PaperMod/layouts/_default/single.html) pour activer/désactiver depuis le fichier config.

### partials

Dans layouts/partials/comments.html (créez le fichier si besoin "comments.html") insérez-y [ce code là](https://github.com/subversive-eu/site/blob/master/themes/PaperMod/layouts/partials/comments.html)

### javascript

Le javascript est nécessaire dans cette config, à vous de le personnaliser en fonction de vos désirs.

Toujours dans layouts/partials/, créez le fihcier "staticman-js-common.js" et collez-y [ce qu'il y a ici](https://github.com/subversive-eu/site/blob/master/themes/PaperMod/layouts/partials/staticman-js-common.js).

Pour des soucis de performance, les liens risquent de ne plus être valide. Aucune importante, allez naviguer sur le github du site.

### css

Pour styliser le formulaire et l'affichage avec les boutons [c'est ici](https://github.com/subversive-eu/site/blob/master/themes/PaperMod/assets/css/an-old-hope.min.css)

A vous de choisir en fonction de votre architecture css, en fonction du thème choisi.

## Protection contre le spam

[Akismet](askimet.com) me semble correct.
[ReCaptcha](https://developers.google.com/recaptcha) également.
[HCaptcha](https://www.hcaptcha.com/)
Je n'ai pas lu leur respect de la vie privée.

## Notes importantes

- Il n'y pas de protection contre le spam, si jamais lisez l'article [Tuto en anglais de 2020](https://jvblog.net/configuring-staticman-hugo/).
- Il n'y a pas de modération avant affichage.
- Ne pas hésiter à observer [le code source du site](https://github.com/subversive-eu/site)
- Cette version est très simple, sans réponse entre commentaires, avec deux champs requis seulement.
- Pour observer [où se stocke un commentaire](https://github.com/subversive-eu/site/tree/master/data/comments)

## Astuce

Je maitrîse mal le vocabulaire git mais avant de push -u vers le dépôt github, pensez à utiliser "git pull" pour "rapatrier" les nouveaux commentaires sur votre dépôt local.

## Sources
[Tuto en anglais de 2018](https://www.datascienceblog.net/post/other/staticman_comments/)  
[Tuto en anglais de 2019](https://yasoob.me/posts/running_staticman_on_static_hugo_blog_with_nested_comments/)  
[Tuto en anglais de 2020](https://jvblog.net/configuring-staticman-hugo/)  
[Tuto en anglais de 2020 2](https://spinningnumbers.org/a/staticman-heroku.html#site-configuration-files)  


