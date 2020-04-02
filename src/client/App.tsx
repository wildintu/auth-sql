import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Blogs from "./Blogs";
import PostBlog from "./PostBlog";
// import Blog from "./Blog";
// import Detail from "./Detail"

const App: React.FC<IAppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/postblog" component={ PostBlog } />
        {/* <Route exact path="/Blogs/:id/details" component={ Detail } />*/}
        <Route exact path="/blogs" component={ Blogs } /> 
        <Route path="/" component={ Welcome } />
      </Switch>
    </Router>
  );
};

export interface IAppProps {};

export default App;
