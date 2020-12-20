import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  //piece of code which runs base on given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user in logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("user is >> ", user);

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

// https://aggie.io/rfr9rl8fr
//https://clone-2e6ef.web.app/
//https://netflix-clone-f52a9.web.app/
