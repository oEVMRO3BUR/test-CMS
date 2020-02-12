import React from "react";


/**
 * preview lorsqu'on ajoute un auteur sur le blog grâce au CMS
 */
const AuthorPreview = ({ entry, widgetFor }) => {
    return (
      <div className="main">
      <div className="box">
       <img src={entry.getIn(["data", "illustration"])}></img>
        <div className="description">
          <p>
          {entry.getIn(["data", "author"])}
          </p>
          <p>
            {entry.getIn(["data", "title"])}{" depuis le "}
            {entry.getIn(["data", "date"])}
          </p>
          <p>"{entry.getIn(["data", "excerpt"])}"</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default AuthorPreview;
