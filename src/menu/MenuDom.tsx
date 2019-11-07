import * as React from 'react';
import MenuDomItem from './item';
import {MenuList} from "../models";

export default class MenuDom extends React.Component<MenuList> {
    render() {
        return <ul>
            {
                this.props.items.map(
                    (item) => <MenuDomItem key={item.key} text={item.text}/>
                )
            }
        </ul>
    }
}