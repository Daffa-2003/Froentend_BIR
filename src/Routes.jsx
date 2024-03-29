import React from "react";
import { useRoutes } from "react-router-dom";

import Login from "pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Login/> },
    
  
  ]);

  return element;
};

export default ProjectRoutes;
