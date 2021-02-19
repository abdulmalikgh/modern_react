import axios from "axios"
import { useParams } from "react-router-dom"
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams()

    const { data : blog, error, isPending } = useFetch('http://localhost:8002/blogs/' + id)

    const handleClick = () => {

        axios.delete('http://localhost:8002/blogs/' + id)

            .then( response => {

                window.location.replace('/')

            })
    }

    return ( 

        <div className="blog-details">

            <article>

                {isPending && <div> Loading... </div>}

                {error && <div>Cannot fetch data from the resources</div>}

                {blog && ( 
                    
                    <article>

                        <h2> {blog.title}</h2>

                        <p> Written by {blog.author}</p>

                        <div>{blog.body}</div>

                         <button onClick={ handleClick }>

                            delete

                        </button>

                    </article>

                )}

            </article>

        </div>

     );

}
 
export default BlogDetails;