import { Page } from "../models";

export const page: Page = {
  menu: { items: [{ key: "1", text: "Menu 1" }, { key: "2", text: "Menu 2" }] },
  body: { bodyText: "Hello React!" }
};

export const template = (html: string): string =>
  `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#000000" />
        <title>Movies Application</title>
      </head>      
      <body>
        <div id="root">${html}</div>
      <script src="/assets/client.js"></script>
      </body>    
    </html>`;
