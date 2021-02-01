import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import TopBar from "./components/TopBar";
import { AuthProvider } from "./hooks/Authentication";
import PrivateRoute from "./hooks/PrivateRoute";
import ForgotPassword from "./components/auth/ForgotPassword";
import AdditionalInfo from "./components/auth/AdditionalInfo";
const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <TopBar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/step-2" component={AdditionalInfo} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Routes;
