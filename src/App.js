import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      {/* Router */}

      <Router>
        <Switch>
          <Route path="/search">
            <h1> This is the search page page </h1>
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
