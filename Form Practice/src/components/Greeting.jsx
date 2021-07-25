import { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState('')
    const [handleValue, setHandleValue] = useState('')
    const handleChange = (event) => {
      setHandleValue(event.target.value)
    }
    const submitChange = () => {
      setName(handleValue)
      setHandleValue('')
    }    
    return(
        <div className="App">
            <h1>Hello {name}</h1>
            <input type="text" value={handleValue} placeholder="Enter Your Name" onChange={handleChange}/>
            <button onClick={submitChange}>Submit</button>
        </div>
    )
}

export default Greeting