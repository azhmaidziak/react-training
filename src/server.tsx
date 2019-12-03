import * as Express from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { AppDom } from "./components/containers";
import { template } from "./preload";

const server = Express();

server.use("/assets", Express.static(process.cwd() + "/dist/assets"));
server.use("/dist", Express.static(process.cwd() + "/dist"));

server.get("/", (req, res) => {
  const html = renderToString(<AppDom init={false}/>);
  res.send(template(html));
});

server.listen(5555);
