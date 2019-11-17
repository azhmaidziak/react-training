import * as React from "react";
import MenuDom from "../menu";
import BodyDom from "../body";
import { Page } from "../models";
import ThemeContext from "../context";

export default class AppDom extends React.Component<Page> {
  render(): React.ReactNode {
    const {
      menu: { items: items },
      body: { bodyText: bodyText }
    }: Page = this.props;
    return (
      // just for touch React Context
      <ThemeContext.Provider value={{ state: "dark" }}>
        <div className="app_menu">
          <MenuDom items={items} />
        </div>
        <div className="app_body">
          <BodyDom bodyText={bodyText} />
        </div>
      </ThemeContext.Provider>
    );
  }
}
