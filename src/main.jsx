import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Details from './Components/Details/Details';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Statistics from './Components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/details/:jobID",
    element: <Details></Details>,
    loader: () => fetch("/public/FeatureJobs.json")
  },
  {
    path: "/appliedJobs",
    element: <AppliedJobs></AppliedJobs>,
    loader: ()=> fetch("/public/FeatureJobs.json")
  },
  {
    path: "/statistics",
    element: <Statistics></Statistics>
  }
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
