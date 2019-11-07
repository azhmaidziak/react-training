import * as React from 'react';
import {Body} from "../models";

export default class BodyDom extends React.PureComponent<Body> {
    render(): React.ReactElement<React.JSXElementConstructor<Body>> {
        return <div>{this.props.bodyText}</div>;
    }
}