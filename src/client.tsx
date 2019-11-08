import * as React from "react";
import * as ReactDOM from "react-dom";
import AppDom from "./app";
import { page } from "./preload";

ReactDOM.hydrate(
  <AppDom menu={page.menu} body={page.body} />,
  document.getElementById("root")
);
