import SearchContainer from "./SearchContainer";
import MoviesDetailContainer from "./MovieDetailContainer";

const routes =[
            {
                path: '/search:filter?',
                component: SearchContainer
            },
            {
                path: '/movie:filter?',
                component: MoviesDetailContainer
            }
        ];

export default routes;