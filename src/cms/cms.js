/** 
 * Ce fichier permet de personnaliser nos preview lorsqu'on utilise le CMS (ajout d'un post ou d'un nouveau auteur)
**/


import CMS from "netlify-cms-app";
//on importe les différentes style afin de les appliquer sur nos previews 
//on n'a pas besoin de les appeler 
import articleStyle from "./style/articleBodyStyle"
import frontMatterStyle from "./style/frontMatterStyle"
import authorStyle from "./style/authorStyle"
import AuthorPreview from "./component/AuthorPreview"
import ArticlePreview from "./component/ArticlePreview"

//correspond à la preview des post du blog 
CMS.registerPreviewTemplate("blog", ArticlePreview);
//correspond à la preview des auteur du blog
CMS.registerPreviewTemplate("autheur", AuthorPreview);
