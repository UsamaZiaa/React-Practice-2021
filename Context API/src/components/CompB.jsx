import CompC from './CompC'
import {FirstName} from '../App'
import { useContext } from 'react'

const CompB = () => {
    const {fname,lname} = useContext(FirstName)
    return(
        <div>
            <h1>Hello, This Is Component B {fname} {lname}</h1>
            <CompC/>
        </div>
    )}

export default CompB