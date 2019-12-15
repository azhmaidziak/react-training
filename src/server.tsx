import * as Express from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { template } from "./preload";
import routes from "./components/containers/routes";
import {StaticRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
const server = Express();

server.use("/assets", Express.static(process.cwd() + "/dist/assets"));
server.use("/dist", Express.static(process.cwd() + "/dist"));

server.get("*", (req, res) => {
    const context = {};
  const html = renderToString(<StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
  </StaticRouter>);
  res.send(template(html));
});

server.listen(5555);
