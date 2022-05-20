import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
/*------ Pages-----*/
// import { Home } from "./Pages/Home";

import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";


import HomeEvent from "./Pages/Home-event";

import NotFound from "./Pages/404";
import Profile from "./Pages/Profile";


import BlogGridPage from "./Pages/BlogGridPage";
import BlogSingle from "./Pages/BlogSingle";


class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          {/* <ScrollToTopRoute exact={true} path={"/"} component={Home} /> */}
 
     
     

          <ScrollToTopRoute exact path="/Contact" component={Contact} />
          <ScrollToTopRoute exact path="/Profile" component={Profile} />


          <ScrollToTopRoute exact  path="/" component={HomeEvent} />



         
          <ScrollToTopRoute exact path="/BlogSingle" component={BlogSingle} />
          <ScrollToTopRoute exact path="/BlogGridPage" component={BlogGridPage} />



          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
