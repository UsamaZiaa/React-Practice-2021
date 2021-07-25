import { useState } from 'react';

const LoginForm = () => {
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [handleFName, setHandleFName] = useState('')
    const [handleLName, setHandleLName] = useState('')

    const handleFNameChange = (event) => {
        setHandleFName(event.target.value)
    }

    const handleLNameChange = (event) => {
        setHandleLName(event.target.value)
    }

    const submitForm = (event) => {
      event.preventDefault()  
      setFName(handleFName)
      setLName(handleLName)
      setHandleFName('')
      setHandleLName('')
    }    
    return(
        <div className="App">
            <h1>Login Form</h1>
            <h1>Hello {fname} {lname}</h1>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    value={handleFName}
                    placeholder="Enter Your First Name"
                    onChange={handleFNameChange}
                />
                <input
                    type="text"
                    value={handleLName}
                    placeholder="Enter Your Last Name"
                    onChange={handleLNameChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm