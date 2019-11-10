import * as React from "react";
import { Body } from "../models";
import * as styles from "./bodyDom.module.sass";

export default class BodyDom extends React.PureComponent<Body> {
  render(): React.ReactNode {
    return (
      <div>
        <p className={styles.content}>{this.props.bodyText}</p>
      </div>
    );
  }
}
