import { useState } from 'react'
import axios from 'axios'


const Create = () => {

    const [title, setTitle] = useState('')

    const [body, setBody] = useState('')

    const [author, setAuthor] = useState('Gaffar')

    const [isPending, setIsPending] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()

        setIsPending(true)

        // const history = useHistory()

        const blog = JSON.stringify({ title, body, author })

        axios.post('http://localhost:8002/blogs', 

        {

            data: JSON.stringify(blog)

        }).then( response => {
            
            setIsPending(false)

            window.location.replace('/')

        })
    }

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form>
                <label htmlFor="title">
                    Blog title:
                </label>
                <input type="text" required  id="title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
                <label htmlFor="body">
                    Blog Body:
                </label>
                     <textarea id="body" value={body} onChange={ (e)=> setBody(e.target.value)} required> 
                    </textarea>
                <label htmlFor="author">
                    Blog author: 
                </label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)} required>
                    <option value="Malik">Malik</option>
                    <option value="Gaffar">Gaffar</option>
                </select>
                {!isPending && <button type='submit' onClick={ handleSubmit }>Add Blog</button>}
                {isPending && <button>Loading...</button>}
            </form>
        </div>
     );
}
 
export default Create;