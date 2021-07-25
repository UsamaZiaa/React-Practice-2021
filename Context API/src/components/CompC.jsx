import {FirstName} from '../App'

const CompC = () => {
    return (
    <div>
        <FirstName.Consumer>{({fname,lname})=><h1>I Am Component C Hello {fname} {lname}</h1>}</FirstName.Consumer>
    </div>
    )
}

export default CompC