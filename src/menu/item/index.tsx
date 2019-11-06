import * as React from 'react';
import MenuItem from '../../models/MenuItem'


const MenuDomItem: React.FunctionComponent<MenuItem> = (item: React.PropsWithChildren<MenuItem>) =>
    <aside>
        <li key={item.keyId}>{item.text}</li>
    </aside>;

export default MenuDomItem;