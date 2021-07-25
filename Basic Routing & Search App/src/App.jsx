import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navbar from './components/Navbar'
import Search from './components/Search'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/search" component={Search}/>
        {/* <Route component={Error}/> */}
        {/* <Redirect to="/"/> */}
      </Switch>
    </div>
    )
}

export default App;