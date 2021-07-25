import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Instructions from "./screens/Instructions";
import Home from "./screens/Home";
import Movies from "./screens/Movies";
import Series from "./screens/Series";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Instructions} />
            <Route path="/home" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    </main>
  );
};

export default App;