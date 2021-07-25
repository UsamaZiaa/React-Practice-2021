import './App.css'
// import {add} from './calculator'
import * as Calculator from './calculator'

function App() {
  return (
      <div className="App">
        <h1 className="heading">Simple Calculator</h1>
        <ul>
          <li>The Addition is: {Calculator.add(8,7)} </li>
          <li>The Subtraction is: {Calculator.sub(8,7)} </li>
          <li>The Multiplication is: {Calculator.mul(8,7)} </li>
          <li>The Division is: {Calculator.div(8,7)} </li>
        </ul>
      </div>
  );
}

export default App;
