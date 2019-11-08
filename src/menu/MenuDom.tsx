import * as React from "react";
import MenuDomItem from "./item";
import { MenuList } from "../models";
import { ReactNode } from "react";

export default class MenuDom extends React.Component<MenuList> {
  render(): ReactNode {
    return (
      <ul>
        {this.props.items.map(item => (
          <MenuDomItem key={item.key} text={item.text} />
        ))}
      </ul>
    );
  }
}
