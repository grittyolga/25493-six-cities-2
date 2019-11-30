import React from "react";
import MainPage from "../mainpage/mainpage.jsx";
import DetailPage from "../detailpage/detailpage.jsx";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getPageScreen() {
    if (location.pathname === `/`) {
      return <MainPage />;
    } else if (location.pathname.startsWith(`/details`)) {
      return <DetailPage card={0} />;
    } else {
      return null;
    }
  }
  render() {
    return <React.Fragment>{this.getPageScreen()}</React.Fragment>;
  }
}

export default App;
