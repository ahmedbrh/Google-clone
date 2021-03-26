import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./components/SearchPageRes";
function App() {
  return (
    <div className="App">
      {/* Router */}

      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/*  Page d'acceuil   */}

        {/* page de recherche  (The results page ) */}
      </Router>
    </div>
  );
}

export default App;
