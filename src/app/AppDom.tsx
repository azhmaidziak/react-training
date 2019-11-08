import * as React from "react";
import MenuDom from "../menu";
import BodyDom from "../body";
import { Page } from "../models";

export default class AppDom extends React.Component<Page> {
  render(): React.ReactNode {
    const { menu, body }: Page = this.props;
    return (
      <React.Fragment>
        <div className="app_menu">
          <MenuDom items={menu.items} />
        </div>
        <div className="app_body">
          <BodyDom bodyText={body.bodyText} />
        </div>
      </React.Fragment>
    );
  }
}
