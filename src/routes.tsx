import { createBrowserRouter } from "react-router";
import Home from "./pages/home";
import Establishment from "./pages/establishment";
import App from "./App";

export const router=createBrowserRouter([
  {
    path:'/',
    Component:App,
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'/:id',
        Component:Establishment,
      },
    ]
  }
])