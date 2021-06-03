import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "containers/Header";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";

//TODO: issue render page 생성

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/:id" component={DetailPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
