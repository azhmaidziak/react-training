import * as React from "react";
import { MenuItem } from "../../models";

const MenuDomItem: React.FunctionComponent<MenuItem> = (
  item: React.PropsWithChildren<MenuItem>
) => {
  const [count, setCount] = React.useState(0);
  return (
    <li onClick={(): void => setCount(count + 1)}>
      {item.text}: with count = [{count}]
    </li>
  );
};

export default MenuDomItem;
