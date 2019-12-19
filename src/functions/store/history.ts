import {createBrowserHistory,createMemoryHistory } from 'history';

const history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory({
    initialEntries: ['/search'],
});
export default history;