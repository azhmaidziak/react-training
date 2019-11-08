import * as React from "react";
import MenuDomItem from "./item";
import { MenuItem, MenuList } from "../models";

export default class MenuDom extends React.Component<MenuList> {
  render(): React.ReactNode {
    return (
      <ul>
        {this.props.items.map(({ key, text }: MenuItem) => (
          <MenuDomItem key={key} text={text} />
        ))}
      </ul>
    );
  }
}
