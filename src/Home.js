import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {

    const { data : blogs, error, isPending } = useFetch('http://localhost:8002/blogs')

    // const handleClick = (id) => {

    //     const filteredBlog = blogs.filter( blog => blog.id !== id)

    //     setBlogs(filteredBlog)
    // }

    return ( 

        <div className="home">
            
            {error && <div> { error } </div>}

            {isPending && <p>Loading...</p>}

            {blogs && <BlogList title="All Blogs" blogs={blogs}  />}

        </div>

    );
}
 
export default Home;