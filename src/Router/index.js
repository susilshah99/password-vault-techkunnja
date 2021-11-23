import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router";
const SignUpPage = React.lazy(() => import("../SignUp"));
const LoginPage = React.lazy(() => import("../Login"));
const Dashboard = React.lazy(() => import("../Dashboard"));

const LoadingUI = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  fontSize: "24px",
};

function Routes() {
  return (
    <React.Suspense fallback={<div style={LoadingUI}>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <PrivateRoute path="/welcomepage">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </React.Suspense>
  );
}

function auth() {
  const token = localStorage.getItem("isVerified");

  console.log(token);
  if (token) {
    return true;
  }
  return false;
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default withRouter(Routes);
