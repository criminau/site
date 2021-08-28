---
title: "Creer un site internet ou un blog statique en 2020"
author: "subversive"
slug: "creer-un-site-internet-statique-en-2020"
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
date: 2020-03-06T18:00:00+02:00
keyword: "Créer un site internet en 2020, créer un blog statique, créer un site internet statique, creer un site statique, créer un site, hugo cms, hugo, gohugo, cms statique, website"
pdfname: "creer-un-site-internet-statique-en-2020"
---

Méthode utilisée pour ce site.  
La création d’un site n’est pas une ligne parfaite, vous devrez affronter des inconvénients techniques.
<!--more-->

### A télécharger et installer

[7-zip](https://www.7-zip.org/) - Traitement de dossier -  
[Nodejs](https://nodejs.org/en/) - Traitement JS -  
Un compte [Github](https://github.com/) - Votre dépôt internet -  
Un peu de place dans vos documents - Votre dépôt local -  
[Git](https://git-scm.com/) - Gestion de dépôt -  
Un [thème hexo](https://hexo.io/themes/) -  
Un éditeur de code, dans l'exemple nous prendrons [sublime text](https://www.sublimetext.com/) -  

Créez votre compte, téléchargez les applications, choisissez votre thème.  

Installez 7-zip.  
NodeJS puis Git.  

Creer un Dossier Hexo (par exemple dans vos documents), lancez cmd depuis l'adresse du dossier (tapez cmd puis la touche Entrée).  

````angular2
npm install hexo-cli -g
hexo init blog
cd blog
npm install
````

Votre blog est créé.  

## Design

Vous avez choisi un thème, ou plusieurs.  
Attention ! Certains n'ont pas de menu...
Télécharger les avec git :  
Par cette méthode, vous ne pourrez les modifier, mais il sera facile de le tenir à jour.
Sur le dépôt GitHub du site, a droite, cliquez sur le bouton vert "Clone or Download", copiez le lien.
Retourner sur votre explorateur de fichier, cliquez sur themes dans le dossier de votre blog.
Puis clic droit "Git Bash Here".
Pour coller le lien dans git bash : Clic droit, Paste.

```angular2
git clone votreliendutheme
```

### Configuration

Ouvrez votre editeur de text, ouvrez le dossier de votre blog, puis ouvrez le fichier config.yml.
Pour le thème, mettez le nom du dossier de votre thème choisi.  
Pour Deploy, ne mettez rien, nous passerons par git.  
Language, fr.  
Vérifier bien le format des dates, mettez les en français pour une lecture plus rapide de vos utilisateurs.

## Déploiement

Clé SSH :

Allez dans Github settings sous votre profil &#x2192; SSH and GPG &#x2192; New SSH key. Donnez y un nom.  
Retourner dans le dossier de votre site &#x2192; clic droit &#x2192; git bash here.  
Commande :

```angular2
ssh-keygen -t rsa -b 4096 -C "votremail@mail.com"
```

```angular2
clip < ~/.ssh/id_rsa.pub
```

Retournez sur Github collez votre clé. Validez.

Sur Github créez un nouveau dépôt (en anglais repository). Vous arrivez ensuite sur la page du dépôt qui est vide. Stoppez l'activité en local de votre site.
Dans le dossier de votre Blog, clic droit, Git Bash Here. Stoppez l'activité en local de votre site.

Poursuivons sur votre dépôt :

PS: Pour coller du texte dans Git, clic droit paste.

Hugo/Blog &#x2192; clic droit &#x2192; git bash here.  
Commandes :

```angular2
git init  
git remote add origin git@github.com:moncompte/Blog.git  
git add .  
git commit -m "Premier envoi"  
git push -u origin master  
```

Votre Dépôt est à jour. Continuons. Allez sur [Netlify](https://www.netlify.com/). &#x2192; Get Started for free. Connectez-vous via Github.
Puis New site from Github. Sélectionnez votre compte Github. Puis le dépôt de votre Blog. Déployez-le.
Le site déployé dans notre exemple fonctionne. Votre site est normalement sur le net.

## Intégration (payant, pas obligatoire)

La première chose à faire est de renommer votre domaine. Allez dans site settings &#x2192; change site name. Vous vous retrouvez avec exemple-blog.netlify.com . Changez votre baseUrl dans config, en local comme sur Github.

Pour ceux ne souhaitant pas payer, sautez ce chapitre.

Si vous ne possédez pas de nom de domaine, achetez-en un. Désactivez le protocole DNSSEC. Enregistrez quatre Serveurs DNS externes :

```angular2
dns1.p02.nsone.net  
dns2.p02.nsone.net  
dns3.p02.nsone.net  
dns4.p02.nsone.net
```

Retournez sur la page overview de votre site netlify &#x2192; Domain settings &#x2192; add custom domain &#x2192; collez le vôtre. Forcez et/ou attendez la mise en route HTTPS.

Nous allons tenter une redirection de votre domaine netlify vers votre domaine externe, pour cela rendez-vous dans le dossier static de votre site sur le dépôt github :  
Ouvrez le EDIWeb, créer un fichier `_redirects` Copiez-y :


```angular2
# Redirect default Netlify subdomain to primary domain
https://votresite.netlify.com/* https://votredomaine.fr/:splat 301!
http://votresite.netlify.com/* https://votredomaine.fr/:splat 301!

```

Enregistrer dans la branche master.
Penser à mettre le dossier sur votre disque local au même endroit /static.

Voilà votre site tourne !
A vous de jouer pour obtenir du trafic ! Chacun sa méthode.

Dernière chose pour ne pas vous laisser dans l'embarras.

## Mettre à jour son site

Assez complexe, tout d'abords ne changez jamais le nom du dépôt Github. Ainsi que le local.
Exercez votre mise à jour avec `hugo server -D` désactivé via le cmd.

Puis clic droit &#x2192; GitBash here. Voici la suite de commande :

```angular2
git status
git add .  
git commit -m "nomdelamiseajour"
git push -u origin master ou git push -f origin master  
```
Normalement votre site se met à jour directement via le dépôt Github.

Pensez à vérifier de temps en temps sur netlify, que les mises à jour soient bien publiées, il peut-y avoir des surprises !
