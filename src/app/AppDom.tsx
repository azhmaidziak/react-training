import * as React from 'react';
import MenuDom from '../menu';
import BodyDom from "../body";
import {Page} from "../models";

export default class AppDom extends React.Component<Page> {
    constructor(page:Page){
        super(page);
        this.state = {
            count: 0
        }
    }

    render() {
        return <React.Fragment>
            <div className="menu">
                <MenuDom items={this.props.menu.items}/>
            </div>
            <div className="body">
                <BodyDom bodyText={this.props.body.bodyText}/>
            </div>
        </React.Fragment>;
    }
}