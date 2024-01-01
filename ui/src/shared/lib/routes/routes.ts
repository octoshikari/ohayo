import { createRoute } from 'atomic-router';

export const routes = {
  dashboard: {
    index: createRoute(),
  },
  404: createRoute(),
};
