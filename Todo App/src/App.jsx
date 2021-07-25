import './App.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState('')
  const [todos, setTodos] = useState([])
  const addItem = () => {
    setTodos([...todos, item])
    setItem('')
  }
  const handleChange = (event) => {
    setItem(event.target.value)
  }
  const delete_todo = (i) => {
    let newTodos = todos
    newTodos.splice(i,1)
    setTodos([...newTodos])
  }
  return (
      <div className="App">
        <h1>Todo App</h1>
        <input type="text" onChange={handleChange} value={item}></input>
        <AddCircleIcon onClick={addItem} style={{fontSize: '50px', cursor: 'pointer'}} />
        <ul style={{listStyle: 'none', margin: '20px 0px'}}>
          {todos.map((value,index)=>{
            return <li key={index}>{index} {value} <span onClick={() => delete_todo(index)}><DeleteIcon/></span></li>
          })}
        </ul>
      </div>
  );
}

export default App;