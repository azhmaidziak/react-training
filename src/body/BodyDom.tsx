import * as React from 'react';
import {Body} from "../models/Page";

export default class BodyDom extends React.PureComponent<Body>{
    render(): React.ReactElement<React.JSXElementConstructor<Body>>{
        return (<div key={this.props.keyId}>{this.props.bodyText}</div>);
    }
}