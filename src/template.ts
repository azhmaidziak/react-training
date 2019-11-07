import {Page} from "./models";

const template = (html: string, page: Page) =>
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>title</title>
      </head>      
      <body>
        <div id="root">${html}</div>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(page).replace(/</g, '\\u003c')}
        </script>  
      <script src="/assets/client.js"></script>
      </body>    
    </html>`;

export default template;