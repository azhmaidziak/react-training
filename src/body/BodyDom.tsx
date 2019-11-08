import * as React from "react";
import { Body } from "../models";

export default class BodyDom extends React.PureComponent<Body> {
  render(): React.ReactNode {
    return <div>{this.props.bodyText}</div>;
  }
}
