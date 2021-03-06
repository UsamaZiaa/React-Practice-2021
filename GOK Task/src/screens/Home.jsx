import Header from '../components/Header'
import Placeholder from '../components/Placeholder'
import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <Header title="Home"/>
            <Link to="/series" className="link">
                <Placeholder title="Popular Series"/>
            </Link>
            <Link to="/movies" className="link">
                <Placeholder title="Popular Movies"/>                
            </Link>
        </div>
    )
}

export default Home