import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Create from './components/Create'
import BlogDetail from './components/BlogDetail'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/create" component={Create}/>
              <Route path="/blogs/:id" component={BlogDetail}/>
              <Route component={NotFound}/>
            </Switch>
        </div>
      </div>
    </Router>
    )
}

export default App;