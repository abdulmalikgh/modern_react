import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    
    const handleClick = (id) => {
        const filteredBlog = blogs.filter( blog => blog.id !== id)
        setBlogs(filteredBlog)
    }
    return (  
        <div className="home">
            <BlogList title="All Blogs" blogs={blogs} handleClick={handleClick} />
        </div>
    );
}
 
export default Home;