import { createHistoryRouter } from 'atomic-router';
import { createBrowserHistory } from 'history';
import { routerControls } from './controls';

const history = createBrowserHistory();

const router = createHistoryRouter({
  routes: [],
  controls: routerControls,
});
