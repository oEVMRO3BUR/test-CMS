import CMS from "netlify-cms-app";


//style pour le contenu de la preview d'article 
const styleArticle=CMS.registerPreviewStyle(`
.mainContent{
  text-align: justify;
  font-size:16px;
  padding: 0rem 2rem;
  margin-top : 60px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: normal;
  color:#333333;

}
.mainContent h1{
  font-size:38px;
}
.mainContent h2{
  font-size:30px;
}
.mainContent h3{
  font-size:24px;
}

.mainContent pre{
  background: #f5f2f0;
  padding:10px 0;
}
.mainContent pre+code{
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  text-align: left;
  color:black;
}

.mainContent a{
  color: #1686B8;
  text-decoration: none;
}

.mainContent img{
  max-width:700px;
}
.mainContent p{
  margin:15px 0px;
}
.mainContent blockquote
{
  font-style: normal;
  font-size: 16px;
  margin-left: 32px;
  font-family: Consolas, "Times New Roman", Verdana;
  border-left: 4px solid #CCC;
  padding-left: 8px;
}
.imgFin{
  display: block;

  margin:30px auto;

}
`,
    { raw: true }
  );

export default styleArticle;
