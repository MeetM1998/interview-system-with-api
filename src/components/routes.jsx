import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import InterviewResultForm from "./InterviewResult/AddEditForm";
import InterviewResultTable from "./InterviewResult";
import UserForm from "./Users/AddEditForm";
import UserListTable from "./Users";

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const isLoggedIn = useSelector((state) => state.auth.token !== null);

  return (
    <Switch>
      <RestrictedRoute
        exact
        path="/interview-result"
        component={InterviewResultTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        exact
        path="/interview-result/add"
        component={InterviewResultForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        exact
        path="/interview-result/edit/:id"
        component={InterviewResultForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        exact
        path="/users-list"
        component={UserListTable}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        exact
        path="/users-list/add"
        component={UserForm}
        isLoggedIn={isLoggedIn}
      />
      <RestrictedRoute
        exact
        path="/users-list/edit/:id"
        component={UserForm}
        isLoggedIn={isLoggedIn}
      />
    </Switch>
  );
};

export default Routes;
