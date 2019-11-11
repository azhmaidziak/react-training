import * as React from "react";
import { MenuItem } from "../../models";

const MenuDomItem: React.FunctionComponent<MenuItem> = (
  item: React.PropsWithChildren<MenuItem>
) => {
  const [count, setCount] = React.useState(0);
  const increaseCount = (): void => setCount(count + 1);
  return (
    <li onClick={increaseCount}>
      {item.text}: with count = [{count}]
    </li>
  );
};

export default MenuDomItem;
