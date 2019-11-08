import * as React from "react";
import MenuDom from "../menu";
import BodyDom from "../body";
import { Page } from "../models";
import { ReactNode } from "react";

export default class AppDom extends React.Component<Page> {
  render(): ReactNode {
    return (
      <React.Fragment>
        <div className="menu">
          <MenuDom items={this.props.menu.items} />
        </div>
        <div className="body">
          <BodyDom bodyText={this.props.body.bodyText} />
        </div>
      </React.Fragment>
    );
  }
}
