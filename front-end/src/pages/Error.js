import {Link} from 'react-router-dom'
const Error = ()=>{
    return(
        <sectopn className = 'section'>
            <h1>404</h1>
            <p>page not found </p>
            <Link to='/'> back home</Link>
        </sectopn>
    )
}
export default Error;
