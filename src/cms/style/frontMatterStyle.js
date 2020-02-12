import CMS from "netlify-cms-app";

//style pour l'image de la preview d'article 
const frontMatter= CMS.registerPreviewStyle(`
  html,body{
    margin: 0;
  }
  .allPage{
    min-height:100vh;
    display:flex; 
    flex-direction:column;
  }

  .content{
    flex-grow:1;
  }
  
  .blockFooter{
    background-color:#cccccc;
  }

  .frontMatter{
    position: relative;
    height:250px;
    margin:0;
  }
  
  .details{
    color: white;
    position: absolute;
    top: 0;
    width: 90%;
    height: 100%;
    z-index:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin:0 5%;
    z-index: 1;
    text-shadow: 1px 0 0 #000, 1px 1px 0 #000, 0 1px 0 #000, 
                -1px 1px 0 #000, -1px 0 0 #000, -1px -1px 0 #000, 
                0 -1px 0 #000, 1px -1px 0 #000;
  }
  
  .details h1 {
    font-size:30px;
    margin:0 0 15 px 0;
  }
  
  .details small{
    font-size:14px;
    margin-top: 10px;
  }
  .details p
  {
    font-size:18px;
    margin: 10px;
  }
  
  .coverImage{
    position: absolute;
    top: 0;
    overflow: hidden;
    left:0;
    width: 100%;
    height: 100%;
    z-index:0;
  }

  .header{
    margin:0;
    width:100%;
  }
  .containerHeader{
    background-color:#efefef;
  }
  .coverImage img{
    width: 100%;
    height: 100%
  }`,
    { raw: true }
  );

export default frontMatter;
