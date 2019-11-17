import * as React from "react";
import { Body } from "../models";
import * as styles from "./bodyDom.module.sass";
import ThemeContext, { ContextState } from "../context";

export default class BodyDom extends React.Component<
  Body,
  React.Context<ContextState>
> {
  render(): React.ReactNode {
    return (
      <ThemeContext.Consumer>
        {(value): React.ReactNode => (
          <div className={styles[value.state]}>
            <p className={styles.content}>{this.props.bodyText}</p>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
