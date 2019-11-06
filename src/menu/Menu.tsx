import * as React from 'react';
import MenuDomItem from './item'
import MenuList from "../models/MenuList";


export default class Menu extends React.Component<MenuList> {
    render() {
        return (
            <ul key={this.props.keyId}>
                {
                    this.props.items.map(
                        (item) => <MenuDomItem keyId={item.keyId} text={item.text}/>
                    )
                }
            </ul>
        )
    }
}