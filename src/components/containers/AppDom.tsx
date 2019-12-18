import * as React from "react";
import {Provider} from "react-redux";
import MoviesContainer from "./MoviesContainer";
import ErrorBoundary from "../renders/ErrorBoundary";
import * as styles from "./App.module.sass";
import store from "../../functions/store/configureStore";
import {renderRoutes} from 'react-router-config';
import history from "../../functions/store/history";
import {ConnectedRouter} from "connected-react-router/immutable";
import routes from "./routes"

export default class AppDom extends React.Component {
    render(): React.ReactNode {
        return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <ErrorBoundary>
                            <div className={styles.app_body}>
                                {renderRoutes(routes)}
                                <MoviesContainer/>
                            </div>
                        </ErrorBoundary>
                    </ConnectedRouter>
                </Provider>
        );
    }
}
