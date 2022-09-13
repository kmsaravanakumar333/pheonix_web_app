import '../../src/App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//SideNav
import Navbar from '../Components/Navbar';
import HomePage from '../Pages/HomePage/HomePage';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Services from '../Pages/Services/Services';
import Portfolio from '../Pages/Portfolio/Portfolio';
import ContactUs from '../Pages/ContactUs/ContactUs';

const routes = [
  {
    path: "/",
    exact: true,
    element: HomePage,
  },
  {
    path: "/about-us",
    exact: true,
    element: AboutUs,
  },
  {
    path: "/services",
    exact: true,
    element: Services,
  },
  {
    path: "/portfolio",
    exact: true,
    element: Portfolio,
  },
  {
    path: "/contact-us",
    exact: true,
    element: ContactUs,
  }
  // {
  //   path: "users",
  //   exact: true,
  //   element: Users,
  //   childRoutes: [
  //     {
  //       path: "list",
  //       exact: true,
  //       element: UsersList,
  //       title: "Users"
  //     },
  //     {
  //       path: "add",
  //       exact: true,
  //       element: UsersAddEdit,
  //       title: "Add User details"
  //     },
  //     {
  //       path: "edit/:id",
  //       exact: true,
  //       element: UsersAddEdit,
  //       title: "Edit User details"
  //     }
  //   ]
  // },
];

const SidebarLayout = () => (
  <>
    <div>
      < Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  </>
);

function Routing() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} element={SidebarLayout(route.path)}>
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  element={<route.element />}>

                  {route?.childRoutes?.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      element={<route.element title={route.title} />} />
                  ))}
                </Route>
              </Route>
            ))}
          </Routes>
        </div>
      </div>
    </Router >
  );
}

export default Routing;
