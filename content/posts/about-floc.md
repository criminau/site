---
title: "A propos des FLoC"
author: "criminau"
slug: "about-floc"
ShowToc: true
draft: false
hidemeta: false
tocopen: false
disableShare: false
date: 2022-01-26T08:00:00
cover:
    image: ""
    alt: ""
    caption: ""
images: ""
keyword: ""
pdfname: "about-floc"
---

Une plongée profonde sur un terrain miné par l'intérêt de posséder du pouvoir sur autrui.
<!--more-->

## Introduction

FLoC pour Federated Learning of Cohorts, en français Apprentissage Fédéré des Cohortes.  
Tout d'abord, nous détaillerons la technique et l'aspect social des FLoC.  
Par la suite nous chercherons une définition de la vie privée. Nous observerons son coût, nous tenterons d'en définir son importance.  
Enfin, nous finirons par comprendre le but réel derrière cet acharnement.  

> "On a créé une infrastructure de surveillance dystopique juste pour que des gens cliquent sur la pub."
> Zeynep Tufekci


## Aspect Technique

### Cookies

Le 25 mai 2021, [la CNIL engage des mises en demeure](https://www.cnil.fr/fr/cookies-une-vingtaine-organismes-mis-en-demeure).  
[La définition d'un cookie](https://www.cnil.fr/fr/definition/cookie).

Passons aux choses plus sérieure dont vous n'avez pas encore entendu parler..

### Fingerprinting

La prise d'empreinte digitale est activée sur beaucoup de navigateur comme firefox ou chrome.
Concernant l'Europe et la Data Protection Commission (DPC) ils n'ont pas envie d'en avoir conscience.  
La [CNIL en donne une définition](https://www.cnil.fr/fr/definition/fingerprinting) mais ne prend aucune mesure pour protéger les utilisateurs.

En bref, plus votre navigateur agit différemment des autres, plus il est plus facile de définir votre empreinte digitale.

### FLoC

La dernière trouvaille de google sont les FLoC.  
Les FLoC n'apparaissent pas dans [le glossaire de la CNIL](https://www.cnil.fr/fr/glossaire).  

{{< figure src="https://criminau.xyz/media/floc-technique-min.avif" alt="Schéma de fonctionnement de la publicité ciblée via les FLoC" caption="Schéma de fonctionnement de la publicité ciblée via les FLoC" >}}

La figure ci-dessus, vous explique le fonctionnement des FLoC :  

Des centaines de cohortes sont créées. Chaque individu est rangé dans une cohorte en fonction de son historique de navigation récent.  
L'annonceur (celui qui a besoin de publicité) et l'éditeur (celui qui affiche la publicité) partagent le trafic de leur site vers Google via l'API des FLoC ```document.interestCohort()```.
Ainsi Google, saît qui a besoin de quoi (l'annonceur a besoin des cohortes 1096) et qui est capable d'afficher quoi (un site web parlant jeux vidéos pour enfant ne va pas mettre de la pub de chaussures pour homme).

Google sélectionne ainsi les annonces pour chaque cohorte/utilisateur.  
Enfin l'éditeur affiche la publicité personnalisée/ciblée en fonction de la cohorte qui navigue sur son site.

Les cohortes vont diviser les individus, vous serez rangé dans une case et google s'occupera bien de vous.

Refuser les FLoC sur son site internet via le header HTTP :

```
Permissions-Policy: interest-cohort=()
```

Les FLoC entreront en vigueur fin 2021 et remplaceront les cookies tiers.

En anglais le mot flock signifie troupeau.

Les FloC vont améliorer la détection par fingerprinting. Un individu avec une cohorte vide (empty) **sera très vite remarqué**.  

### Contexte croisé

Actuellement Google, via les cookies tiers, doit croiser les données sur vous pour comprendre le genre de personne que vous êtes.
Grâce au FLoC, Google va s'approprier cette information de manière immédiate et précise.

La discrimination sur internet verra le jour car les cohortes pourront vous classer selon si vous êtes blanc, noir, étranger, jeune ou vieux, femme ou homme.

Google vous surveillera sans croiser ses données.

## Aspect social

Google réfute le General Data Protection Regulation (GDPR) et le California Consumer Privacy Act (CCPA) car son modèle économique est une violation de la vie privée.  
TOUS les Gouvernements de la planète sont complices car leur modèle de pouvoir est également une violation de la vie privée.

### Statistiques (2021)

54.37% du trafic mondial est sur mobile.  
39.75% de la population est sous Android... (Android c'est Google).  
64.67% de la population mondiale utilise le navigateur Google Chrome.  
91.66% du monde passe par google.com.  

Vous n'avez toujours pas compris. Google connaît 91.66% de la population mondiale....  
L'indentification unique sur votre Android.  

### Acharnement sécuritaire

Je n'aborderai pas le sujet des câbles sous-marins, de la NSA et du parti communiste Chinois.  
Actuellement le renseignement français a accés à toutes vos données depuis la métropole, tout comme la NSA.  
Les caméras dans les bus scolaires, les gares, les trains, la rue, les supermarchés sont d'actualités.  

L'Europe laisse faire. Des sociétés privées comme [veesion](https://veesion.io) sont fières de participer à ce sadisme général. Avec comme argument sadique : "Détectez les vols, Automatiquement, En temps réel !"  

La pauvreté morale de ces individus règne.

### Sans commentaire

La CNIL et toutes les agences gouvernementales aini qu'européenne sont complices de cette surveillence de masse.

Firefox défend votre vie privée. C'est pourquoi son moteur de recherche par défaut est Google.
Les appareils Apple protègent votre vie privée. Google est le principal moteur de recherche sur leur navigateur.
[GNOME](https://www.gnome.org/) est sponsorisé par Google...

Je n'aborderai pas Google AMP.

Google fera comme Apple, avec comme argument la vie privée, mais pour eux cet argument est synonyme de monopole et de conservation de la donnée.  
La donnée continuera de circuler vers les agences de renseignement.

Je ne mentionnerai pas les IPC (Inter-Process Communication) notemment sur les claviers d'android(gboard).

En 2012, [IBM dénonce l'utilisation de Siri](https://theworld.org/stories/2012-05-23/ibm-bans-use-apples-siri-application).  
IBM a bannit des salariés utilisant Cortana de Windows.

Désactiver la géocalisation et le réseau sur Android EST UN LEURRE. La seule manière de se protéger est de controller à 100% le réseau sur lequel vous êtes connecté (wi-fi).

Je ne mentionnerai pas les [SignalBackdoors](https://blogs.fsfe.org/larma/2017/signal-backdoors/).  

[Qualcomm prévoit de laisser ouverte la caméra frontale de votre smartphone](https://www.theverge.com/22811740/qualcomm-snapdragon-8-gen-1-always-on-camera-privacy-security-concerns), [pour votre sécurité](https://youtu.be/3H6tfcZLHfg?t=10758)


Je vous invite a vous renseigner sur le **datacenter en Utah de la NSA**.  
Se renseigner sur **Soli**, la technologie de google ainsi que de **Motion Sense** et en version Apple, **Digital Crown**.



## Vie privée

La vie signifie le chemin, du latin "via"; privée vient du latin "privatus" qui signifie "séparé de, dépourvu de".  
Donc littéralement se séparer du chemin ? Quel est donc le chemin ?

### Historiquement

La vie sociale des individus est l'apparition même de la vie privée entre l'Oikos et la Polis. Elle est considérée comme une période, un espace tranquille à l'abri des tumultes de la société.

### Vie privée et droit

Le Droit au Respect de la Vie Privée ne possède pas de définition de la Vie Privée.  
Le Droit essaie de garantir cette protection via des faits, des cas et des notions.  
Seule la jurisprudence est capable d'en donner des notions.  

De plus les limites sont nombreuses comme la vie publique, la sécurité, la lutte contre la corruption, lutte contre la fraude fiscale,...

### Définition européenne de la vie privée

L'europe aussi ne donne pas de définition.  
Mais fixe rapidement ses limites :  

> « Droit au respect de la vie privée et familiale  
  Toute personne a droit au respect de sa vie privée et familiale, de son domicile et de sa correspondance.
  Il ne peut y avoir ingérence d'une autorité publique dans l'exercice de ce droit que pour autant que cette ingérence est prévue par la loi et qu'elle constitue une mesure qui, dans une société démocratique, est nécessaire à la sécurité nationale, à la sûreté publique, au bien-être économique du pays, à la défense de l'ordre et à la prévention des infractions pénales, à la protection de la santé ou de la morale, ou à la protection des droits et libertés d'autrui.
    »  

Je cite :  

> "à la protection de la santé ou de la morale"

La morale serait donc un ennemi de la vie privée et elle doit être protégée.

Les propos "Droit au respect de la vie privée et familiale" semblent signifier que la vie privée serait plus une condition sociale d'existence qu'une forme de droit moral. Dans le sens où la vie privée relève plus des meurs que de la morale ce qui justifie alors le paragraphe précédent.

Elle est associé sociologiquement à l'individu dans son environnement social plutôt que moralement à son rôle d'être vivant doué de raison, être spirituel.  
De cette façon elle se détache de son rôle protecteur, puisqu'elle rattache l'individu uniquement par sa condition sociale.

Aujourd'hui, la vie privée divise profondément, deux courants de pensée s'affrontent :  
- L'un affirmant qu'elle est nécessaire et qu'elle doit être assurée intégralement, aucune forme de collecte d'information.  
- L'autre assurant qu'elle n'est que le reflet de notre modèle social et donc qu'elle doit être partagée à tous ! Que toutes les données soient publiques.

La belle affaire.

### GDPR

General Data Protection Regulation.  
Ces lois pour la sécurité des données sont entrées en vigueur le 25 Mai 2018 en Europe.  

Et la encore aucun mot sur la vie privée... Par contre ils donnent une définition des données personnelles.  
Aucun droit à l'oubli.  
Aucun droit à l'anonymat.  

### Je n'ai rien a cacher !

Pour ceux qui croient encore que vous n'avez rien à cacher....  
Je ne vais pas vous expliquer le principe du panoptique.  
Je vous expliquerai le principe de [l'arrêt du crime](https://criminau.xyz/articles/about-floc.html#arr%c3%aatducrime).  

### Coût de la vie privée

Exclusion du système bancaire.
Exclusion sociale :  
- Les rues regorgent de caméra.  
- Android respire Google.  
- [Apple et ses termes d'utilisation](https://tosdr.org/en/service/158)  

### Exclusion sociale

Ceux désirant le respect de leur vie privée sont déjà exclue socialement depuis plus d'une décennie dans le plus grand silence ! Cela se nomme **les pathologies de l'anonymat**, où l'on fait croire que c'est la faute des gens alors que c'est de la faute de ceux qui ne désire pas l'être.

Ne pas utiliser le Play Store ou le Google Service Framework (GSF) de Google vous exclue de **tout lien social** puisque même Signal nécessite le GSF pour son utilisation.

Depuis 2019, Google à renforcer la protection de la signature du GSF, il est donc devenu un calvaire de fuir la surveillance en aillant une vie "normale".

## Notion d'anonymat

Anonyme issu du grec ancien ἀνώνυμος anônymos (« sans nom »).

Cette notion d'anonymat est délicate à appréhender car il ne faut pas oublier que chacun en fonction de ses connaissances croient être anonyme.

Exemple :
Une personne qui se connecte sur internet avec un pseudo qui n'est pas le sien, se sentira anonyme, mais elle ne le sera pas, car elle communiquera avec son adresse IP.  
Cette personne vivra son anonymat alors qu'une autre sachant qu'elle peut être identifiable ne se sentira pas anonyme.

En ce sens, la notion d'anonymat est DELICATE.

## Arrêtducrime

Facebook continue d'espionner les adolescents<cite>[^1]</cite>.

[^1]: [Facebook continue d'espionner les adolescents](https://californianewstimes.com/facebook-accused-of-continuing-to-surveil-teens-for-ad-targeting-techcrunch/593643/).

Les Gouvernements sont au courant et sont complices<cite>[^2]</cite>.  

[^2]: Des lois pour obliger google par le [Magazine Forbes](https://www.forbes.com/sites/thomasbrewster/2021/10/04/google-keyword-warrants-give-us-government-data-on-search-users/?sh=4df8b8a07c97).

Les termes d'utilisation, de services des sites web sont une vaste mascarade<cite>[^3]</cite>.

[^3]: [Les termes d'utilisation, de services](https://tosdr.org)

Je me balade sur le google francophone. Quand je tombe sur [Google Family Link](https://play.google.com/store/apps/details?id=com.google.android.apps.kids.familylink&hl=fr&gl=FR).

L'application family link de google.  
Je voit la note sur le Play Store au 16/09/21. 1.4/5. Soit 5.6/20. C'est moche.  
*Bon à l'heure où j'écrit l'article (06/01/22), quelqu'un est passé nettoyer les commentaires et avis :open_mouth:.*  
La lecture des commentaires fait peur.  
Les gosses ne peuvent plus penser par eux même.  

Voilà le crime : penser à conserver sa vie privée.

La récente mise à jour de Youtube qui n'affiche plus les pouces rouge est une preuve de plus. Ils ne veulent plus que ce soit vous qui décidiez ce que vous regardez ou vous pensez.

L'Arrêtducrime, c'est la faculté de s'arrêter net, comme par instinct, au seuil d'une pensée dangereuse. La pensée dangereuse ici reste l'anonymat sur internet.

L'objectif reste que ce soit vous seul, par pure stupidité protectrice, qui commettez l'Arrêtducrime.

Dans le cas des enfants, l'objectif est d'annihiler leur capacité à prendre conscience de ce qui est bien ou mal sur ce qu'ils font sur internet. En restreignant leurs activités, ils perdent tout regard critique sur leurs agissements.

> « Ceux qui sont capables de voir au-delà des ombres et des mensonges de leur culture ne seront jamais compris et encore moins crus par les masses »
> Platon

## Conclusion

Ceux qui veulent la vie privée et la liberté sont des criminels.  
Les gens ne désirent pas être libre. Ils confondent avoir le choix et être libre.  
La maladie du pouvoir est bien plus lourde en conséquence que celle de la cupidité.  
MAIS pour VOTRE BONHEUR vous souhaitez rester dégagé de tout cela.  
La vie privée est un droit fondamental humain.  

### Pour penser plus loin

A l'image de la religion qui gérait les individus, les GAFAM gère l'ordre public sur le domaine du cyber espace, ils sont complices avec les états du maintient de l'ordre et de la dérive autoritaire.

Première Loi de la vie Privée :
Ne croyez jamais Google lorsque qu'ils promettent de faire quelque chose pour la "protection de la vie privée". JAMAIS.


## sources
[What is FLoC?](https://web.dev/floc/)  
[Google’s FLoC Is a Terrible Idea](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea)  
[W3C Draft Report about FLoC](https://wicg.github.io/floc/)  
[Les cookies de Google sont toxiques le FLoC aussi](https://www.laquadrature.net/2021/04/27/les-cookies-de-google-sont-toxiques-le-floc-aussi/)  
[Statistiques sur internet](https://gs.statcounter.com/)  
[Ceux qui n'ont rien à chacher](https://fr.wikipedia.org/wiki/Rien_%C3%A0_cacher_%28argument%29)  
[Mozilla is Broken](https://hacktivis.me/articles/Mozilla%20is%20Broken)  
[cleanuptheweb.org](https://cleanuptheweb.org/)  
