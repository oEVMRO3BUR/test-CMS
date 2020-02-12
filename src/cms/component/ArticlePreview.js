import React from "react";
import header2 from "./header6.png";
import fin from "../../assets/images/fin.png";
import footer from "./footer.png";
/**
 * preview lorsqu'on ajoute un post sur le blog grâce au CMS
 */
const ArticlePreview = ({ entry, widgetFor }) => {
  console.log(entry.getIn(["data", "illustration"]))
  return (
    <React.Fragment>
      <div className="allPage">
        <div className="content">
          <div className="containerHeader">
            <img src={header2} className="header"></img>
          </div>
          <div className="frontMatter">
            <div className="coverImage">
              <img src={entry.getIn(["data", "illustration"])}></img>
            </div>
            <div className="details">
              <h1>{entry.getIn(["data", "title"])}</h1>
              <p>
                {entry.getIn(["data", "tags"]) &&
                  entry.getIn(["data", "tags"]).map(el => {
                    return <span>{el} </span>;
                  })}
              </p>
              <small>
                Publié par {entry.getIn(["data", "author"])} le{"  "}
                {entry.getIn(["data", "date"])}
              </small>
            </div>
          </div>
          <div className="mainContent">{widgetFor("body")}</div>
          {widgetFor("body") && <img className="imgFin" src={fin}></img>}
        </div>
        <div className="blockFooter">
          <img src={footer} className="header"></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticlePreview;
