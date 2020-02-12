import React from "react"


export default class HTML extends React.Component {
  render() {
    return (
      <html lang={"fr"} {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Blog Coddity</title>
          <meta name="application-name" content="blog coddity"/>
          <meta name="description" content="Blog de Coddity, le digital français fait main."/>
          <meta name="keywords" content="BLOG, CODDITY, SS2I, SSII, AI, DATA, ENGINEER, WEB"/>
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <noscript>
            {"Javascript est requis pour faire fonctionner l'application. Veuillez activer Javascript pour aller plus loin."}
          </noscript>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
