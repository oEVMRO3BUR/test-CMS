---
title: "Meetup Paris.js 74 @Scaleway"
author: "Chris"
excerpt: "Automated testing, GRPC et Histoire du web"
illustration: "./cover.jpg"
date: "2018-05-30"
tags: ["meetup", "paris-js", "javascript"]
---

Je vous propose un résumé des talks du **meetup #74 de Paris.js chez Scaleway le 30 mai 2018**.

Pardonnez la forme brute et le franglais, l'idée est de retranscrire le contenu avant tout.

#Conf 1 : Why automated testing is cool
##Par Adrien Joly @ALGOLIA + @EEMI

**Faire des tests, pourquoi ?**
- Garantir que le codebase soit pérenne et puisse évoluer sainement
- Combattre le code legacy, qui n'est autre qu'un code pas testé => donc trop risqué d'y toucher
- Augmente la confiance dans le code et ses évolutions
- Force à faire une meilleure architecture / conception
- Peut servir de documentation

**Bonus perso**
- La batterie de tests affiche des coches "vert vert vert" = satisfaisant
- Permet de coder avec liberté car si c'est bancal alors les tests le montreront
- Ecrire du code qui teste du code = cool
- Permet de tester son code et celui des autres = cool

**A/ Tests unitaires**
- Obj : tester des fonctions "pures" (= qui ne modifient pas l'environnement)
- Prévoir les inputs et les outputs
- Rapides à écrire et rapide à exécuter

**B/ Tests fonctionnels**
- Idem que Functional testing, End to end testing, Acceptance testing, UI testing, Recette
- Obj : tester le produit final comme un utilisateur, qui pourrait testerà la main dans l'absolu
- Le produit = black box, peu importe son implémentation, on ne s'intéresse qu'à l'input et l'output
- Inconvénient : assez lourd à exécuter car simulation d'un environnement complet parfois (navigateur, etc.)

**C/ Tests d'intégration**
- Obj : tester des composants
- Nécessaire isolation pour tester en simulant les autres briques (mock)
- Mesure de ce qui change pendant le test (spy)
- Inconvénient : plus complexe, souvent nécessaire d'actualiser les tests en fonction des modifs de l'environnement

**Conseils persos**
- Ne pas couvrir 100% des tests, se concentrer sur le plus critique
- Tests fonctionnels : tester d'abord le golden path (usage principal)
- Utiliser des systèmes d'intégration continue
- Serveurs dans le cloud qui exécutent les tests
- Permet d'automatiser les tests à chaque interaction avec repo git
- Tests d'intégration : vérifiez que vous faites le ménage si vous avez dû créer des ressources pour votre jeux d'essai
- Ecrivez des tests les plus prévisibles possible : pas de nombres aléatoires, pas de timeout, pas de dates système mais des dates fixes
- Ecrivez les messages d'échec au format issue github pour une meilleure identification par les devs et la création de tickets plus rapide
- Ecrivez le test avant de développer la fonctionnalité
- Tests de régression : dès que vous trouvez un bug, écrivez le test qui ne passe pas à cause du bug
- Tout test ne doit pas dépendre de l'exécution d'un autre test
- Nommer les fichiers de manière à comprendre de quel type de test il s'agit (ou les classer par répertoire)

**Outils / Frameworks**
- Travis, JEST pour back et intégration
- JEST pour node à mettre dans les dev dependancies (car pas en prod)
- npm test à créer et insérer dans package.json
- Puppeteer, Cypress, Selenium pour les tests UI / web

**Code**
- expect().toBe()
- expect().toMatch()

**Ressources**
- [Slides (adrienjoly.com)](https://adrienjoly.com/slides/testing)
- [Vidéo de la conf (youtube.com)](https://youtu.be/LQry0d1kb_o?t=11m43s)
- [Quelques exemples de tests (github adrien joly)](https://github.com/adrienjoly/adrienjoly.github.com/tree/master/slides/testing/sample-tests)

#Conf 2 : Modern services communication with GRPC
##Par Mathieu Acthernoene @Scaleway

**Microservice**
- Services unitaires mono-métier (ex : sender mail, auth, billing, etc.)
- Indépendants : reboot possible d'un service uniquement
- Scalable unitairement selon les besoins métiers
- Implémenté dans le langage de son choix (car indépendant)

**Non Microservice lorsque**
- Un dev bosse sur plusieurs services en même temps
- Les services partagent des bases de données ou des libs
- Les changements et déploiements sont synchronisés et donc dépendants

**Implémentation classique**
- Une API gateway qui récupère toutes les requêtes et communique au bon service en REST

**Problématique pour les grosses grosses applis**
- Avec les nombreuses itérations, des dépendances s'installent entre les microservices et on n'est plus en REST pur
- Coder et décoder du JSON pour chaque échange de message = lourd
- Le JSON embed sa propre description = alourdit les échanges

**Solution possible : Protobuf**
- Langage binaire et typé
- Permet l'échange entre les microservices et le master Protobuf
- Client / lib dans tous les langages majeurs
- Compatibilité ascendante native
- Tooling & linters dispos
- Déjà en prod pour de nombreux grès gros, en commençant par google
- Utilise le gRPC pour communiquer : Google Remote Procedure Call, interface de définition des microservices, inventé en 2001
- Supporté par nginx depuis peu
- On parle de back, mais pour le front ? Via une API GraphQL Adapter

#Conf 3 : The amazing tale of the web part 1
##Par Loïc Ortola @Jawg

Impossible de prendre des notes, conf très vivante et rythme très rapide. Je vous invite à retrouver les slides sur le groupe Meetup.

J'ai tout de même relevé quelques éléments :

**Divers**
- AT&T : inventeurs du téléphone début XXème
- Bell labs : entreprise américaine ultra innovante (30 000 brevets)
- IMP : Interface Messaging Protocol : premier routeur au monde, est a l’origine du « log in ». L’envoi du premier message entre les deux routeurs a été interrompu. Seul le mot « log » est passé. Le « in » arriva ensuite.

**Robert Cailliau**
- Inventeur du HTTP afin d'échanger entre chercheurs

**Marc Andreessen**
- Crée Mozaik
    - Afin de publier des travaux de recherche avec contenu
    - 1er navigateur grand public
    - Succès monstrueux car les entreprises voient là un moyen d'atteindre les consommateurs finaux
- Crée Netscape
    - Passe de 0 à 65 millions d'utilisateurs en quelques mois
    - Entrée en bourse pour éviter de se faire bouffer par Microsoft

**Brendan Eich**
- Bosse sur Netscape
- Invente "Javascript" afin de contrer "Java"
- Fonde Mozilla et démarre le projet phoenix (future firefox) à la mort de netscape

**Bill Gates**
- A compris que le software était plus important que le hard
- Fonde Microsoft
- Se bat contre Netscape pour la maîtrise du web
- Gagne en forçant Internet Explorer par défaut dans windows 95

**Recommandations de lecture**
- Halt & catch fire saison 1, raconte cette période
