---
title: "Meetup Paris.js 70 @Algolia"
author: "Chris"
excerpt: "API Client, GraphQL et Async Hook"
illustration: "./cover.jpg"
date: "2018-01-31"
tags: ["meetup", "paris-js", "javascript"]
---

Je vous propose un résumé des talks du **meetup #70 de Paris.js chez Algolia le 31 janver 2018**.

Pardonnez la forme brute et le franglais, l'idée est de retranscrire le contenu avant tout.

#Conf 1 : You're probably making an API client
##Par Hareoen Viaene @Algolia

**Constat** : des API dans tous les sens, qu'elles soient officielles / voulues ou non. => donc autant appliquer les bonnes pratiques même lorsqu'on ne veut pas vraiment faire de client API :
- Separate the request from the core code (classique) ;
- Wrap the fetch in a wrapper, then you don't care how the wrapper is implemented and can change it later ;
- Instancier un objet apiClient qui connait les API keys (invariables pour tous les appels).

#Conf 2 : An intro to graphql with JS
##Par Alexandre Bodin

**Principe**
- GraphQL = langage d'interrogation créé par FB pour optimiser les requêtes qui agrègent des données
- Typage et syntaxe propres
- Possibilité d'agréger des données sans faire de multiples A/R sur l'API (par exemple, demander TOUS les auteurs et TOUS leurs livres en une fois)
- API côté serveur : déclaration d'un schéma de ce que doit proposer l'API, des requêtes en BDD correspondantes

**Outils côté client**
- Apollo (équipe de MeteorJS) : grande communauté, compatible avec beaucoup de frameworks ou libs, bon pour démarrer
- Relay (de FB) : très intégré à react, optimisé, compile, communauté moins grande, plus complexe
- Dans les deux cas, queries en cache après le fetch

**Pros**
- Pas de réel inconvénient à l'utiliser
- Implémentation proche d'un appel à une API
- Pas de documentation de l'API à produire car faite automatiquement par la fonction d'introspection
- Cache nativement géré

**Cons**
- Pas grand-chose
- Pas possible de faire du cache HTTP en get car un seul endpoint graphql en POST

#Conf 3 : Async hook sur node.js
##Par Vladimir De Turckheim @Sqreen & reviewer Node.js officiel

**Problématique** : stacktraces très courtes en node à cause de l'event loop. En opérations asynchrones, Node perd la notion de contexte => impossible à debugger !

**Solutions**
- Les domains : créer un contexte d'exécution asynchrone et catcher toutes les erreurs non handlées. Mais performance killer ! + Deprecated, en cours de décommissionnement.
- Userland patching : override toutes les méthodes asynchrones du code et l'encadre. Mais ne marche pas avec async / await. + Doit documenter toutes les méthodes appelées !

**Async_hooks**
- Mettre 4 hooks autour des opérations asynchrones : init, before (avant que le callback ne soit appelé), after (après que le callback est appelé), destroy.
- Permet de connaître l'ID de l'opération async parente et enfant, et donc récupérer le contexte parent et le passer à l'enfant, et afficher la stacktrace complète en cas de catch chez l'enfant.
- **OUI MAIS** (info récente) : parfois perte de 30% des perfs.
