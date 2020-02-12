import CMS from "netlify-cms-app";

//style pour la preview des autheurs 
const styleArticle=CMS.registerPreviewStyle(`
.main{
    padding: 50% 10%;
}

.box{
    display: flex;
    flex-direction:row;
    text-decoration:none;
    background-color:#eeeeee;
}
.main img{
    padding:5px;
    height:140px;
}

.description{
    display:flex;
   flex-direction:column;
   margin: 0% 2.5% 0% 2.5%;
}
.description p{
    font-size:16px;
    text-align:left;
    margin-top:0;
    margin-bottom:15px
    color: black;
}

.description p:first-child{
    font-size:20px;
    font-weight:bold;
    margin-bottom:5px;
    margin-top:10px;
}
.description p:nth-child(3n){
    font-style:italic;
}
`,
    { raw: true }
  );

export default styleArticle;