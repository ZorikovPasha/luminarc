import React from 'react';
import { Main } from '../pages/Main';

import { ROUTES } from '../utils/const';

const LazyReviews = React.lazy(() => import('../pages/Reviews'));

export const publicRoutes = [
  {
    path: ROUTES.main,
    element: Main,
    exact: true
  },
  {
    path: ROUTES.reviews,
    element: LazyReviews,
    exact: true
  },
];
