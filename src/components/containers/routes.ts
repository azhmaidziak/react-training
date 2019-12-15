import AppDom from "./AppDom";
import SearchContainer from "./SearchContainer";
import MoviesContainer from "./MoviesContainer";

const routes = [
    { component: AppDom,
        routes: [
            { path: '/search:filter?',
                component: SearchContainer
            },
            { path: '/movie:filter?',
                component: MoviesContainer
            }
        ]
    }
];
export default routes;