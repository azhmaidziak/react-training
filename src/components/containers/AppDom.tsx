import * as React from "react";
import { Provider } from "react-redux";
import MoviesContainer from "./MoviesContainer";
import ErrorBoundary from "../renders/ErrorBoundary";
import * as styles from "./App.module.sass";
import store from "../../functions/store/configureStore";
import { renderRoutes } from 'react-router-config';

export default class AppDom extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <div className={styles.app_body}>
          <ErrorBoundary>
              {renderRoutes(this.props.route.routes)}
              <MoviesContainer/>
          </ErrorBoundary>
        </div>
      </Provider>
    );
  }
}
