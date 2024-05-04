import { IRouteProps } from './routes.types';
import Main from '@components/Main/components';
import Home from '@components/Home/HomePage';

export const routes : IRouteProps[] =[
  {
    path: '/',
    element: <Main/>,
    subRoutes: [
      { path: '', element: <Home/>, },
      { path: 'project/', element: <div/>, },
      { path: 'editing/', element: <div/>, },
      { path: 'play/', element: <div/>, },
      {
        path: 'profile/',
        element: <div/>,
        subRoutes: [
          { path: 'my-projects/', element: <div/>, },
          { path: 'information/', element: <div/>, },
          { path: 'security/', element: <div/>, },
        ],
      },
    ],
  }]