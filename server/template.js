import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";

function template(props = {}) {
  const app = renderToString(<App {...props} />);
  const script = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${app}</div>
      <script>
        window.__STATE__ = ${JSON.stringify(props)}
      </script>
      <script src="/client.js"></script>
    </body>
    </html>
  `;
  return script;
}

export default template;
