import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { page } from "../../preload";
import SearchContainer from "./SearchContainer";
import MoviesContainer from "./MoviesContainer";
import ErrorBoundary from "../renders/ErrorBoundary";

const store = createStore(e => e, page);
export default class AppDom extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <div className="app_body">
          <ErrorBoundary>
            <SearchContainer />
            <MoviesContainer />
          </ErrorBoundary>
        </div>
      </Provider>
    );
  }
}
