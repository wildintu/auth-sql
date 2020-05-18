import React from "react";
import { Navbar } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Blogs from "./Blogs";
import PostBlog from "./PostBlog";
import ReadMore from "./ReadMore";
import Edit from "./Edit";
import Register from "./admin/Register";
import Login from "./admin/Login";

const App: React.FC<IAppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/postblog" component={ PostBlog } />
        <Route exact path="/blogs/:id" component={ ReadMore } />
        <Route exact path="/blogs/:id/edit" component={ Edit } />
        <Route exact path="/blogs" component={ Blogs } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/login" component={ Login } />
        <Route path="/" component={ Welcome } />
      </Switch>
    </Router>
  );
};

export interface IAppProps {};

export default App;
