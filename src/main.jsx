import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Root from './routes/root';
import CreatePerson from './routes/crete-person';
import Companies from './routes/Companies';
import PeopleWithNoCompany from './routes/people-with-no-company';
import ErrorPage from './routes/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'createPerson',
    element: <CreatePerson />,
  },
  {
    path: 'companies',
    element: <Companies />,
  },
  {
    path: 'peopleWithNoCompany',
    element: <PeopleWithNoCompany />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
