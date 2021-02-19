import { useParams } from "react-router-dom"
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams()

    const { data : blog, error, isPending } = useFetch('http://localhost:8002/blogs/' + id)

    return ( 

        <div className="blod-details">

            <article>

                {isPending && <div> Loading... </div>}

                {error && <div>Cannot fetch data from the resources</div>}

                {blog && ( 

                    <article>

                        <h2> {blog.title}</h2>

                        <p> Written by {blog.author}</p>

                        <body>{blog.body}</body>

                    </article>

                )}

            </article>

        </div>

     );

}
 
export default BlogDetails;