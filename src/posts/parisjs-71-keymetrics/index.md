---
title: "Meetup Paris.js 71 @Keymetrics"
author: "Chris"
excerpt: "Introduction à React Native"
illustration: "./cover.png"
date: "2018-02-28"
tags: ["meetup", "paris-js", "javascript"]
---

Je vous propose un résumé des interventions du **meetup #71 de Paris.js chez Keymetrics le 2 février 2018**.

Pardonnez la forme brute et le franglais, l'idée est de retranscrire le contenu avant tout.

#Conf 1 : 5 idées reçues sur react-native
##Par Nicolas Djanmbazian @BAM

**Principe**
- Proche du react, mais render en composants en natif mobile
- Multi plateformes : Android, iOS, Web (& windows mobile en principe)
- Perfs meilleures que Cordova, Live & hot reload, Code push

**Q1 : Ca se voit que ce n'est pas du 100% natif mobile !**
=> Pas toujours, nombreux exemples où c'est transparent (AirBnb)

**Q2 : Ca ne va pas durer !**
=> On ne sait pas, mais c'est maintenu par FB, utilisé par quelques grosses apps, beaucoup de dl de libs, nombreux contributeurs actifs

**Q3 : C'est pas mature !**
=> Pas évident car MAJ tous les mois avec des major changes donc potentiellement compliqué de refaire les dépendances, et libs complémentaires pas encore stables

**Q4 : C'est pas possible de faire XXXFEATUREXXX en React Native**
=> Pourtant, nombreux composants dispos + intégration de SDK assez simple

**Q5 : Très peu de devs formés et dispos**
=> En effet, mais c'est assez facile de passer de React à React native, voire de JS à React native

**Dev React vs Dev React Native :**
- Différences à gérer : DOM et style, Build, Certificats et publication sur store, Animations (pas de CSS3), Offline à gérer, Apparition intempestive du clavier au focus sur un champ, Navigation différente.
- Mais moins de problèmes de compatibilité avec de vieilles versions de navigateurs, responsive plus facile sur smartphone (voir l'API Dimension pour Tablet), Forme des URL plus simple, SEO plus facile

**Conseils pour apprendre ?** => Egghead

#Conf 2 : React navigation
##Par Freddy Harris, Freelance

**Navigator**
- Classe abstraite qui contient une vue, des transitions, la gestion des gestures, un routeur avec un state et des actions, un objet de navigation.
- S'instancie avec les routes et une description de style.

**Implémentations**
- StackNavigator : historique en empilement de vues
- TabNavigator : plusieurs vues instanciées côte à côte et navigation en changeant de tab, lazyloading possible, mais en questionnement actuellement car problèmes de perfs
- DrawerNavigator : menu burger classique, logique de tabs, instanciation similaire avec composant de menu supplémentaire
- Modal = un StackNavigator particulier
- Possible de nester des tabs dans des stacks et inversement
- Besoin très spécifique => créer son propre Navigator en héritant

**Couplage avec Redux**
- Possible mais pas systématique
- Intéressant pour gérer l'authentification et les refresh tokens

**Alternatives**
- Pas réellement pour le moment
- Wrappers autour du composant natif UINavigationController
- Lib JS deprecated ou pas assez performantes (mais c'est probablement l'avenir)

#Conf 3 : ZOMG JAMES ABSENT !!
