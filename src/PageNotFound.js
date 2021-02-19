import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return ( 
        <div className='page-not-found'>
            <h1>Sorry</h1>
            <p>The requested page cannot be found</p>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default PageNotFound;