import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import TopBar from "./components/TopBar";
import { AuthProvider } from "./hooks/Authentication";
import PrivateRoute from "./hooks/PrivateRoute";
import ForgotPassword from "./components/auth/ForgotPassword";
import AdditionalInfo from "./components/auth/AdditionalInfo";
import firebase from "./firebase/firebase_config";
import ResetPassword from "./components/auth/ResetPassword";
const Routes = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    authListener();
  }, []);
  const authListener = () => {
    firebase.auth().onAuthStateChanged((users) => {
      if (users) {
        setUser(users);
      } else {
        setUser(null);
      }
    });
  };
  return (
    <AuthProvider>
      <Router>
        {user && <TopBar />}
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/step-2" component={AdditionalInfo} />
          <Route exact path="/reset-password" component={ResetPassword} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Routes;
