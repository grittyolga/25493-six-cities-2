import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MainPage from "../mainpage/mainpage.jsx";
import DetailPage from "../detailpage/detailpage.jsx";
import SignIn from "../signin/signin.jsx";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" exact component={SignIn} />
          <Route path="/favorites" render={()=><div>в след. задании будет страница</div>} />
          <Route path="/details/:id" component={DetailPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
