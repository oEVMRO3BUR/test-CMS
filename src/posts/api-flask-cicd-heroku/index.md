---
title: "How do you do, fellow kids?"
author: "Matthieu"
excerpt: "Mettre en production rapidement une API Flask avec Gitlab et Heroku"
illustration: "./cover.jpg"
date: "2019-11-06"
tags: ["Python"]
---
**API Flask en croute de CI/CD Gitlab, accompagnée de son déploiement sur Heroku.** 
*Ou comment être confronté, à 40 ans, sans avoir fait de dev depuis la version 1.5 de Python, à une problématique de déploiement en prod d'une demo, lors d'un Hackhaton Ethereum, rempli de dev à capuches allemands et russes.* 

![](./fellowkids__01.jpg)  

###1. Un Hackathon compliqué

Tout part du hackathon EthParis 2019.
Forcément, quand on me prend par les sentiments en me disant "Non mais viens, ça va être cool, on va apprendre plein de choses, pas grave si ton niveau en dev est nul, tu auras toujours quelque chose à faire, et puis, tu arrives sur tes 40 ans, faut que tu fasses ça avant".
Mouais. 
Faire une petite API, quick and dirty, en local, **pas de soucis**, mais apprendre la CI/CD de Gitlab et les déploiements sur Heroku en 2h, entouré de hackers allemands, ce n'est pas tout à fait **la même chose**.


Pourquoi cet article ?
Tout simplement, parce que, sous stress, après 1 litre de RedBull, j'aurais aimé trouver exactement ce qui va suivre. (Bon après j'ai certainement mal cherché, Dieu Google et les anges de la Documentation (avec une majuscule de respect) ont en général toujours les réponses à nos interrogations).

Bref.

**Objectif** : avoir une brique de base d’une API Flask hébergée en production (via [Heroku](https://heroku.com)) avec base de données et avec une CI (via [Gitlab](https://gitlab.com)).

###2. Le projet

Pour appliquer, une simple API qui permet d'ajouter des titres de musique à une liste (on pourrait appeler ça une *playlist*, car c'est une liste de titres à jouer, futé), faite avec Flask et une persistence des données sur une base Posgresql.
Rien de compliqué avec juste 3 routes.

Le code est disponible [ici](https://gitlab.com/MatthieuCoddity/songlist_base).

Pré-requis (ultra obvious) :

 - Python 3.6 installé
 - PostgreSQL installé
 - Un compte Gitlab avec un repo vide
 - Un compte Heroku

Ce qui va suivre a été fait et testé sous Macintosh OS Mojave 10.14.6, des différences peuvent subsister sous Windows (certainement) ou Linux (peu).

###3. Déploiement en local

Le projet utilise :

 - [Flask](http://flask.palletsprojects.com/en/1.1.x/) (of course) microframework web en python
 - Flask-script pour le lancement des tests, la migration de bdd et le lancement de l'app
 - Gunicorn pour le serveur en production
 - Unittest pour les tests unitaires 
 - Autoenv pour le lancement automatique de l'environnement virtuel et la gestion des variables d'environnement
 - [SQLalchemy](https://docs.sqlalchemy.org/en/13/) et [psycopg2](http://initd.org/psycopg/) pour la connexion à la DB

Le projet utilise une persistance des données sur une base PostgreSQL, donc la première action à faire est de créer 2 bases sur votre machine, l'une de dev et l'une de test :

    $ psql
    # create database songlist;
    CREATE DATABASE
    # create database songlist_test;
    CREATE DATABASE
    # quit

Pour lancer le projet, après clonage, placez-vous dans le répertoire et créez un env virtuel Python puis activez le :

    $ python3 -m venv env
    $ source env/bin/activate
    
Maintenant, installation des packages contenus dans le *requirements.txt* :

    $ pip install --upgrade pip
    $ pip install -r requirements.txt

Il est possible d'avoir une **erreur** à l'installation de **psycopg2** si vous n'êtes pas sous Mac, car ici nous utilisons les binaires du package psycopg2. Si c'est le cas, utilisez le package `psycopg2` en remplaçant la ligne dans le *requirements.txt*.


C'est au tour de l'utilisation d'Autoenv! Créez un fichier *.env* à la racine du projet et ajoutez les lignes suivantes :

    source env/bin/activate
    export APP_SETTINGS="core.server.config.DevelopmentConfig"
    export SECRET_KEY="UnePhraseSecreteBadass"
    export DATABASE_URI="postgresql://postgres:@localhost/songlist"
    export DATABASE_URI_TEST="postgresql://postgres:@localhost/songlist_test"

et ensuite l'ajouter au path :

    $ echo "source `which activate.sh`" >> ~/.bashrc
    $ source ~/.bashrc

 Avec *Autoenv*, un `cd` dans le repertoire va lancer automatiquement le script *.env* qui va activer l'environnement virtuel, et renseigner les variables d'environnement en local (mais pas que, on verra ça plus tard).
 Puisque vous avez déjà activé votre `venv` Python, un simple `$ source .env` suffira.
 Autoenv n'est vraiment pas indispensable, un simple script bash pourrait suffire.

Le sujet n'est pas le projet Flask en tant que tel, alors, si c'est la première fois que vous en approchez un, voilà ce qu'il y a à savoir :
 
 - Le module `core` comprend les modules `core.server` (votre app) et `core.tests` (les... tests unitaires).
 - Plusieurs configurations sont prévues : développement, test et production décrites dans le module `core.server.config`. La config sera utilisée via la variable d'environnement `APP_SETTINGS`.
 - `SECRET_KEY` est la clef de sécurité de votre app Flask.
 - `DATABASE_URI` surprise, c'est votre base en local (et `_TEST`, celle de test).

 Attention, en fonction des environnements, si vous avez spécifié un mot de passe à votre base PostgreSQL, pensez à ajouter votre login:password aux URI `DATABASE_URI` et `DATABASE_URI_TEST`.
 

Nous utilisons ici flask-script qui va permettre de manager le lancement des tests, la création, la migration et l'upgrade de la base, et le lancement du serveur.
Commencez par la base de données :

    (env)$ python manage.py db init
    (env)$ python manage.py db migrate
    (env)$ python manage.py db upgrade

Pour le lancement des tests unitaires, c'est très simple :

    (env)$ python manage.py test
    
    test_app_is_development (test_config.TestDevelopmentConfig) ... ok
    test_app_is_production (test_config.TestProductionConfig) ... ok
    test_app_is_testing (test_config.TestTestingConfig) ... ok
    test_add_new_song (test_routes.TestRoutes)
    test_for_adding_a_song ... ok
    test_add_song_already_added (test_routes.TestRoutes)
    test_for_adding_an_already_added_song ... ok
    test_clear (test_routes.TestRoutes)
    test_for_get_all_songs ... ok
    test_getall (test_routes.TestRoutes)
    test_for_get_all_songs ... ok
    test_getall_emptylist (test_routes.TestRoutes)
    test_for_get_all_songs_with_empty_list ... ok
    
    ----------------------------------------------------------------------
    Ran 8 tests in 0.250s
    
    OK
    
Pour le lancement du serveur en local :

    (env)$ python manage.py runserver

Votre app peut être testée sur le port 5000 de votre environnement avec Postman/curl:

```
$ curl -X POST -H "Content-Type: application/json" -d '{"title": "Atomic - Blondie","year" : 1979}' http://localhost:5000/add
$ curl http://localhost:5000/getlist
$ curl -X DELETE http://localhost:5000/clear
```

Maintenant, passons aux choses sérieuses.
  
###4. Gitlab-CI

Gitlab offre des outils de CI/CD, et ce, même pour des comptes freemium.
Votre pipeline CI/CD est défini dans un fichier *gitlab-ci.yml* à la racine de votre projet, celui-ci va contenir les instructions qui vont être exécutées par le [Gitlab Runner](https://docs.gitlab.com/runner/), avec éventuellement des instructions conditionnelles lors de l'échec ou le succès d'un *job*.
Les jobs justement, que sont-ils ?
Eh bien ce sont les différentes instructions ou tâches qui vont être exécutées par le Runner.
 

    Job1:
        type: type de job
        service: 
        - image Docker utilisée par le script (comme par exemple une db)
        variables:
        - variable1 (qui va etre utilisée par le service au-dessus) 
        - variable2
        script:
        - tâche1
    	- tâche2
        - tâche3
     Job2:
     	type: type de job
        script:
        - tâche1
    	- tâche2
        - tâche3

Pour chaque tâche, vous pouvez définir les paramètres qui vont modifier son comportement.
 - `script` (surprise) va définir le script à exécuter
 - `before_script`/`after_script` va définir des instructions à exécuter (surprise) avant ou après l'exécution de la tâche
 - `image` et `service` définit l'utilisation de conteneurs Docker
 - `only`/`except` limitation sur le lancement ou non de la tâche

La liste des paramètres est assez [longue](https://docs.gitlab.com/ee/ci/yaml/#configuration-parameters) avec de quoi s'amuser.

**Au sujet des variables**
Les tâches peuvent évidemment accéder à des variables d'environnement.
Celles-ci peuvent être déclarées via l'UI web **Settings > CI/CD** ou via le fichier *gitlab-ci.yml* directement.
Un [certain nombre](https://docs.gitlab.com/ee/ci/variables/predefined_variables.html) de variables prédéfinies sont disponibles directement.
C'est via ces variables d'environnement que vous allez pouvoir saisir les clefs d'API d'Heroku et les valeurs de configuration de l'application. 

Pour notre projet, le fichier *.gitlab-ci.yml* contiendra 3 jobs : 
 - *test* pour les tests (étonnant) lancés à chaque commit
 - *staging* pour une pre prod sur une instance Heroku pour chaque commit sur master
 - *prod* pour une prod sur une instance Heroku dès que la branche master est taggée

Prêts ? C'est parti, créez un fichier *.gitlab-ci.yml* à la racine et ajoutez les différents jobs ci-dessous.

**Le job de test** 

	
    test:
      services:
      - postgres:latest
	  variables:
	    POSTGRES_DB: songlist_test
        POSTGRES_USER: runner
        POSTGRES_PASSWORD: "pass"
      script:
      - apt-get update -qy
      - apt-get install -y python-dev python-pip
      - pip install -r requirements.txt
      - export SECRET_KEY="UnePhraseSecreteBadass"
      - export DATABASE_URI="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:5432/songlist_test"
      - export DATABASE_URI_TEST="postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:5432/songlist_test"
      - export APP_SETTINGS="core.server.config.TestingConfig"
      - python manage.py test

Premier point, Gitlab va utiliser une image PostgreSQL pour l'exécution des tests via le service donné (postgres) et définir les variables de ce service : nom de la db, user et password.

Pour chaque commit, Gitlab va exécuter le script défini, soit :
 - créer un conteneur dans lequel il va installer un environnement python 
 - installer les paquets du projet contenu dans le *requirements.txt* 
 - définir les variables d'environnement propre à celui de Gitlab (`SECRET_KEY` et `APP_SETTINGS`)
 - définir l'URI de la base testée ici
 - exécuter les tests par la commande
   `python manage.py test`

On y va ?

    $ git add .
    $ git commit -m "ajout gitlabci"
    $ git push origin master 

En principe, vous devriez voir le succès du job :

![](./pipeline_test.png)   

Les plus perspicaces auront noté que je n'ai ici créé qu'une seule branche, master, ce qui est bien sûr une mauvaise pratique. Vous pouvez spécifier le déroulement des jobs sur une branche précise avec le paramètre `only` si le coeur vous en dit, tel que c'est fait ci-dessous avec les jobs de staging et de prod.

 **Le job de staging** 

	staging:
	  type: deploy
	  script:
	  - apt-get update -qy
	  - apt-get install -y ruby-dev
	  - gem install dpl
	  - dpl --provider=heroku --app=votre_nom_app_staging --api_key=$HEROKU_STAGING_API_kEY
	  only:
	  - master
 
Pour chaque commit sur la branche master, spécifié par le paramètre `only`, Gitlab va dérouler, après le job de test, son script Ruby de déploiement `dpl` avec les paramètres suivants:

 - `provider` ici Heroku, si vous avez bien suivi
 - `app` le nom de votre app en staging chez votre provider
 - `api_key` la clef qui va permettre à Heroku d'autoriser le déploiement par Gitlab sur cette app (on voit ça après)

**Le job de production** 

	production
	  type: deploy
	  script:
	  - apt-get update -qy
	  - apt-get install -y ruby-dev
	  - gem install dpl
	  - dpl --provider=heroku --app=votre_nom_app --api_key=$HEROKU_PROD_API_kEY
	  only:
	  - tags
 
Pour chaque version taggée, spécifiée par le paramètre `only`, Gitlab va dérouler, après le job de test, son script Ruby de déploiement `dpl` avec les paramètres différents :

 - `provider` toujours Heroku
 - `app` le nom de votre app de prod chez votre provider
 - `api_key` la clef qui va permettre à Heroku d'autoriser le déploiement par Gitlab sur cette app (on voit ça juste après)

Voilà pour le rapide tour d'horizon du démarrage d'une CI/CD avec Gitlab, qui peut/doit être complétée par les outils disponibles sur la plateforme :

 1. [Caching](https://docs.gitlab.com/ee/ci/caching/) qui permet d'économiser du temps en gardant du contenu de jobs déjà réalisés
 2. [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/) qui offre un panel de fonctionnalités DevOps du building au monitoring
 3. [Chat Ops](https://docs.gitlab.com/ee/ci/chatops/README.html) qui permet aux jobs d'interagir avec des canaux de chat comme Slack
 4. Ou encore une intégration de [Docker](https://docs.gitlab.com/ee/ci/docker/README.html) bien pratique
 
Avancement et historiques des pipelines sont consultables depuis l’interface Web (ma passion : regarder les pipelines et jobs se dérouler et... échouer. Note : pensez à désactiver les notifications mail !).

###5. Heroku

Pour ceux qui ne connaissent pas, Heroku est une entreprise US de PaaS, Plateform as a Service, qui fournit comme son nom l'indique une plateforme de production clef en main. Heroku présente pour moi beaucoup d'avantages quand on veut rapidement mettre en production son app : pas de configuration longue comme dans le cas d'un serveur dédié ou de migraine à force de lire le catalogue AWS avant de pouvoir choisir le service qui va bien. 
En plus de ça, le compte gratuit permet de bien s'amuser déjà, et votre plateforme est facilement scalable.

Dans la pratique, Heroku va permettre de créer un pipeline de déploiement automatisé (pré-prod, prod) connecté à votre logiciel de versionning. 
Une fonctionnalité offerte bien sympa (mais non présentée ici) est le principe de [Review Apps](https://devcenter.heroku.com/articles/github-integration-review-apps). A chaque pull request, une Heroku app va être créée et va permettre de tester la PR en prod.
Heroku peut héberger des applications des principaux langages et framework actuels : Node.js, Ruby, Java, PHP, Python, Go, Scala, Clojure.
Et olive du vodka martini : la [documentation](https://devcenter.heroku.com/) est *très* complète. 

La première étape est l'installation du [CLI](https://devcenter.heroku.com/articles/heroku-cli) qui vous permettra de jouer avec Heroku directement depuis la console (après avoir créé un compte) :

    $ heroku login

Maintenant, si vous avez bien suivi, vous devez créer 2 instances, staging et prod, soit 2 apps qui vont s'appeler `votre_nom_app_staging` et `votre_nom_app`, et qui vont constituer votre *pipeline*.

    $ heroku create votre_nom_app
    $ heroku create votre_nom_app_staging
    $ heroku pipelines:create songlist --app=votre_nom_app
Heroku va vous inviter à choisir dev, staging ou prod pour l'app `votre_nom_app`

    ? Stage of votre_nom_app (Use arrow keys)
    development
    staging 
    ❯ production
Et maintenant, ajouter `votre_nom_app_staging` au pipeline comme app de `staging`

    $ heroku pipelines:add songlist -a votre_nom_app_staging

Bravo votre pipeline est prêt, il ne reste plus qu'à lier Gitlab et Heroku.

![](./heroku_pipeline.png)  

Vous vous souvenez que dans le *gitlab-ci.yml*, vous aviez indiqué deux clefs d'API `HEROKU_PROD_API_KEY` et `HEROKU_STAGING_API_KEY`, la valeur est à récupérer sur l'UI Heroku *manage account>API Key* et à déclarer sur Gitlab *Settings > CI/CD > Variables* pour chacune des clefs.

**API Key :** 
![](./heroku_token.png)  

**Champs Gitlab :**
![](./gitlab_tokens.png)  

En voiture Simone (yeah), Gitlab sera maintenant authentifié sur Heroku.

![](./nina_simone.jpg)  

Pour paramétrer votre app pour le staging et la prod, il suffit d'ajouter les commandes suivantes via le CLI Heroku (et/ou les ajouter directement dans le *.env*) :

    heroku config:set APP_SETTINGS="core.server.config.ProductionConfig" --app votre_nom_app_staging
    heroku config:set APP_SETTINGS="core.server.config.ProductionConfig" --app votre_nom_app
    heroku config:set SECRET_KEY="UnePhraseSecreteBadass" --app votre_nom_app
    heroku config:set SECRET_KEY="UnePhraseSecreteBadass" --app votre_nom_app_staging

Il ne manque rien ?

Si ! Les bases de données.
Heroku propose des bases [Postgresql managés](https://www.heroku.com/postgres), avec des versions gratuites (hobby-dev), que nous allons utiliser ici.
Heroku va instancier 2 bases, et vous donner les credentials permettant de les connecter à vos apps.

 Elles sont créées avec le CLI Heroku, une pour le staging, une pour la prod : 

    $ heroku addons:create heroku-postgresql:hobby-dev -a votre_nom_app_staging
    $ heroku addons:create heroku-postgresql:hobby-dev -a votre_nom_app

Une fois les bases créées, récuperez les credentials sur l'UI d'Heroku pour chaque app, et déclarez les URI des bases via le CLI (et/ou les ajouter directement dans le *.env*) :

![](./credentials_db.png) 

    $ heroku config:set DATABASE_URI="postgres://URI_FOURNIE_PAR_HEROKU_POUR_BASE_STAGING" -a votre_nom_app_staging
    $ heroku config:set DATABASE_URI="postgres://URI_FOURNIE_PAR_HEROKU_POUR_BASE_PROD" -a votre_nom_app    

Pour résumer, vous avez votre pipeline de déploiement créé avec une app de staging et une app de prod, avec pour chacune une base Posgre attachée, avec une configuration de production.

Manque maintenant une chose, le fichier qui va contenir les scripts d'exécution sur Heroku, nommé *Procfile* (sans extension et avec une majuscule - important).
Créez-le à la racine du projet et ajoutez les lignes suivantes : 

    web: gunicorn core.server:app
    upgrade: python manage.py db upgrade

Heroku va créer une "Dyno", un conteneur contenant votre application, sur lequel vous allez pouvoir jouer avec 3 process :

 - `web` : qui sera lancé automatiquement et qui va lancer votre app avec
   un serveur web Gunicorn  
 - `upgrade` : qui va vous permettre
   de réaliser les migrations et upgrade de la base.

Testons tout ça.

    $ git add .
    $ git commit -m "initial commit"
    $ git push origin master

Gardez un oeil sur le déroulement des tests et le lancement des jobs via l'UI de Gitlab (section CI/CD de votre projet).
En principe, vous devriez voir ceci :

![](./Capture d’écran 2019-11-01 à 14.46.33.png)  

Vous pouvez passer à l'upgrade de votre base sur Heroku :

    $ heroku run upgrade --app votre_nom_app_staging

Testez sur https://votre_nom_app_staging.herokuapp.com avec Postman ou un Curl les différentes routes : */add*, */getlist*, et */clear*.

Tout est bon ? Alors, on tag.

    $ git tag -a v1.0 -m "v1.0"
    $ git push origin v1.0

![](./gitlab_pipeline.png) 

Une fois les tests passés sur Gitlab et l'app déployée sur Heroku, migrez la base de prod :

    $ heroku run upgrade --app votre_nom_app

https://votre_nom_app.herokuapp.com est en prod et fonctionnelle!

Rock 'n roll 🤘

Prochain article ? Pourquoi ne pas pousser plus loin Heroku avec un peu de [Travis CI](https://travis-ci.org/) pour varier les plaisirs ou tester les [Github Actions](https://github.com/features/actions) !