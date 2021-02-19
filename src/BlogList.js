import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleClick }) => {
    console.log('data', blogs)

    return ( 

        <div className="blog-preview">

            <h2>{ title }</h2>

            { blogs.map( blog => (

                
                <Link to={`blog/${blog.id}`}>

                    <div className="blog-preview" key= {blog.id }>

                    <h2>{ blog.title }</h2>

                    <p>Written by { blog.author }</p>

                    <button onClick={ (id) => handleClick(blog.id)}>

                        delete

                    </button>

                    </div>
                
                </Link>

            ))}

        </div>

     );
}
 
export default BlogList;