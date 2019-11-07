import * as Express from "express";
import * as React from "react";
import {renderToString} from "react-dom/server";
import AppDom from "./app";
import page from "./data"
import template from "./template"

const server = Express();

server.use('/assets', Express.static(process.cwd()  +'/dist/assets'));
server.use("/dist", Express.static(process.cwd() + "/dist"));

server.get('/', (req, res) => {
    const html = renderToString(
        <AppDom menu={page.menu} body={page.body}/>
    );
    res.send(template(html, page))
});

server.listen(5555);