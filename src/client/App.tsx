import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import Blogs from "./Blogs";
import PostBlog from "./PostBlog";
import ReadMore from "./ReadMore";
import Edit from "./Edit";

const App: React.FC<IAppProps> = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/postblog" component={ PostBlog } />
        <Route exact path="/blogs/:id" component={ ReadMore } />
        <Route exact path="/blogs/:id/edit" component={ Edit } />
        <Route exact path="/blogs" component={ Blogs } /> 
        <Route path="/" component={ Welcome } />
      </Switch>
    </Router>
  );
};

export interface IAppProps {};

export default App;
