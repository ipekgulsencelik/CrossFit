import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './routes/Root';
import WorkoutCreator from './routes/workout-creator/WorkoutCreator';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/createWorkout",
        element: <WorkoutCreator />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
