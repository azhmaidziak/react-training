import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {page, search} from "../../preload";
import SearchContainer from "./SearchContainer";
import MoviesContainer from "./MoviesContainer";
import ErrorBoundary from "../renders/ErrorBoundary";
import configureStore from "../../store/configureStore";
import * as styles from "./App.module.sass"


export default class AppDom extends React.Component<{init:boolean}> {
  render(): React.ReactNode {
    return (
      <Provider store={configureStore(page, this.props.init)}>
        <div className={styles.app_body}>
          <ErrorBoundary>
            <SearchContainer />
            <MoviesContainer />
          </ErrorBoundary>
        </div>
      </Provider>
    );
  }
}
