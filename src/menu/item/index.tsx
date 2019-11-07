import * as React from 'react';
import {MenuItem} from '../../models';

const MenuDomItem: React.FunctionComponent<MenuItem> =
    (item: React.PropsWithChildren<MenuItem>) => <li>{item.text}</li>;

export default MenuDomItem;