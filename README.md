# Blog ⚡️ ![Projet Coddity](https://img.shields.io/badge/Projet-Coddity-red.svg)

Version 3.0

Projet de blog propulsé par [React](https://reactjs.org/) et [Gatsby](https://www.gatsbyjs.org/), avec un zeste de [composants stylés](https://www.styled-components.com/). 💅

[Aux utilisateurs de VSCode, téléchargez l'extension Prettier afin d'embellir vos composants React.](https://github.com/gatsbyjs/gatsby/issues/5610)

## Organisation du code

- `src` contient le code source Javascript compilé par [Gatsby.
- `public` contient les fichiers accessibles publiquement sur Internet.

## Installer le projet

```bash
> git clone https://gitlab.com/coddity/blog-coddity.git blog-coddity
> cd blog-coddity
> npm install
> gatsby develop
```

Vous êtes prêt ! ✨

## Si vous recevez une erreur liée à `libpngquant`

Récupérer le paquetage `libpng12-0_1.2.49-1+deb7u2_amd64.deb` dans votre répertoire courant puis:
```bash
> sudo dpkg -i -g libpng12-0_1.2.49-1+deb7u2_amd64.deb
```

## Participer au développement

Avant de participer au développement du projet, vous devriez suivre les [conventions d'écritures](https://gitlab.com/ajji/blog-coddity/blob/master/docs/Conventions%20d'%C3%A9criture.md).

## License

MIT

---

(c) Coddity
