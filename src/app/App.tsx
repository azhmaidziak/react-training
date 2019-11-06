import * as React from 'react';
import Menu from '../menu';
import Page from "../models/Page";
import BodyDom from "../body";

export default class App extends React.Component<Page> {
    render() {
        return <aside>
            <React.Fragment>
                <div className="menu">
                    <Menu keyId={this.props.menu.keyId} items={this.props.menu.items}/>
                </div>
                <div className="body">
                    <BodyDom keyId={this.props.body.keyId} bodyText={this.props.body.bodyText}/>
                </div>
            </React.Fragment>
        </aside>;
    }
}