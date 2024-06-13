import React from "react";
import Sidebar from "../Sidebar";
import TopNav from "../Topnav";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginLayout from "./LoginLayout";
import { useSelector } from "react-redux";
import Routes from "../Routes";

const UnRestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLoggedIn ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{
            pathname: "/interviewResult",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.auth.token !== null);

  return (
    <Switch>
      <UnRestrictedRoute
        exact
        path="/"
        component={LoginLayout}
        isLoggedIn={isLoggedIn}
      />
      <Route
        render={(props) => (
          <div>
            <Sidebar {...props} />
            <div className="layout__content">
              <TopNav />

              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </Switch>
  );
};

export default Layout;
