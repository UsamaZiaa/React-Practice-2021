import './App.css'
import Time from './components/Time'
import Timer from './components/Timer'
import Counter from './components/Counter'

function App() {
  return (
      <div className="App">
        <Counter/>
        <br/>
        <Time/>
        <br/>
        <Timer/>
      </div>
  );
}

export default App;
