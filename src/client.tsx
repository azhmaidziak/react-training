import express from 'express';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from './app'
import Page from "./models/Page";

const server = express();
const page = {
    menu: {keyId: "key", items: [{keyId: "1", text: "Menu 1"}, {keyId: "2", text: "Menu 2"}]},
    body: {keyId: "key", bodyText: "Hello React!"}
} as Page;

server.get('/', (req, res) => {

    const rendered = ReactDOMServer.renderToString(<App menu={page.menu} body={page.body}/>);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>title</title>
      </head>      
      <body>
        <div id="root">${rendered}</div>
      </body>      
      <script src="/dist/client.js"></script>
    </html>`);
});

server.listen(5555);