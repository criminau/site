---
title: "Installation de ArchLinux avec Astuces"
author: "criminau"
slug: "installation-archlinux"
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
date: 2021-07-20T14:00:00
keyword: "archlinux, informatique, fr tuto, tutoriel, installer, archfi, xfce, usb"
prd: "installation-archlinux"
---

Notes concernant l'installation d'un système d'exploitation sous linux.
<!--more-->

## I. Le choix d'Archlinux

Après avoir testé Ubuntu, Fedora, Manjaro et Nixos. Maintenant c'est autour de Archlinux. Rapide, efficient, grosse communauté, ouvert d'esprit, un peu de sécurité.

Peut-être moins que nixos. Bref, un choix prometteur. Le principal défaut de nixos, c'est d'avoir un petite communauté, donc vous aurez peu de choix. Gnome est quand même gourmand mais vraiment sympa à l'utilisation et bien designé.

L'objectif final est et reste Alpinelinux, FreeBSD et OpenBSD.

## II. USB

Télécharger l'iso et flasher le sur votre usb avec balena.io/etcher/

## III. Installer Archlinux sur un PC en suivant ce tuto

[vidéo tutorielle d'installation de Archlinux avec Archfi](https://iteroni.com/watch?v=u2l54FMgWq4).

Concernant le bootloader, ne prenez pas grub, trop de soucis avec les pc professionnels, prenez syslinux.  
Installez xfce car il est beaucoup plus rapide.  
Pour l'interfarce de connexion prenez le plus léger également celui fait pour xfce.  
Désactiver bluetooth.  
Soyez connecté via ethernet ou usb (en partage de connexion) pour plus de facilité, si possible avec une très bonne connexion (vdsl).  

## IV. Démarrage

Après l'installation place au redémarrage, retirez votre usb et taper (entrer) votre mot de passe, attention c'est un clavier anglais.  
[Voici un clavier en anglais](https://www.branah.com/english).

Il vous faut impérativement le changer.

### 1) Clavier

Normalement vous avez un terminal, ouvrez-le.  
Si vous n'en avez pas, faites crtl+alt+f2 ou alt+f2.

Normalement le clavier est toujours en anglais, tapez :

```angular2
localectl
```

(il vous affiche les paramètres), passons le en FR et continuons pour l'interface de connexion.

```angular2
localectl set-locale LANG=fr_FR.UTF-8
localectl set-keymap fr
localectl set-x11-keymap fr
reboot
```

La le pc redémarre avec cette fois-ci un clavier en français (enfin vous pouvez mettre ce que vous souhaitez).

### 2) Outil pour installer les paquets

Maintenant on va installer yay l'outils pour installer rapidement les paquets de la communauté, via le terminal :

```angular2
git clone yay
cd yay
makepkg -si
```

### 3) Les paquets

#### a. Pour installer un paquet (AUR=yay) via le terminal

```angular2
yay -S nomdupaquet
sudo pacman -S nomdupaquet
```

#### b. Paquet à installer

MuPDF (mupdf) pour les images et pdf.  
Clementine fait bien le taf concernant la musique, vous pouvez l'installer depuis Archfi(le script d'aide à l'installation).  
Youtube -> freetube.io (freetube-bin)  
RSS/atom -> rssowl.org (rssowlnix-bin)  

#### c. Désinstaller un paquet

```angular2
yay -R nomdupaquet
sudo pacman -Rns nomdupaquet
```

## V. Nettoyer sa clé USB

Astuce pour récupérer une clé usb passée par balena.io/etcher/ depuis windows 10 :

Tout se fait au clavier.

```angular2
windows+R
CMD
diskpart.exe
list disk
select disk N (N est le chiffre de votre clé Usb)
clean
create partition primary
select partition 1
format quick
Alt+F4
```
Et voilà !

[Source pour les autres OS](https://www.balena.io/blog/did-etcher-break-my-usb-sd-card/)

## VI. Pour Conclure

Finalement avec Archfi, l'installation de ArchLinux est accessible à tous.  
La grande communauté offre une grande diversité d'outils.  
A l'heure du sur-équipement et du design à outrance, ArchLinux offre l'alternative pour optimiser l'utilisation d'outils informatique.  
