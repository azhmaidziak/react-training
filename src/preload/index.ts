import { Page } from "../models";

export const page: Page = {
  menu: { items: [{ key: "1", text: "Menu 1" }, { key: "2", text: "Menu 2" }] },
  body: { bodyText: "Hello React!" }
};

export const template = (html: string, page: Page): string =>
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>title</title>
      </head>      
      <body>
        <div id="root">${html}</div>
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify(page).replace(
        /</g,
        "\\u003c"
      )}</script>  
      <script src="/assets/client.js"></script>
      </body>    
    </html>`;
