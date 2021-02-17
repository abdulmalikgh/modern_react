import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)

    const [isPending, setisPending] = useState(true)

    const [error, seterror] = useState(null)

     function fetchData() {

        axios.get(url)

           .then( response => {

               setData(response.data)

               setisPending(false)

               seterror(null)

           }).catch(err => {
                
               setisPending(false)

               if(err?.response?.data == undefined) {

                   seterror('Could not fetch data from that resource')


               } else {

                seterror(err.response.data)

               }

               

           })
    }

    // call useEffect here
    useEffect( () => {

        setTimeout(function(){

            fetchData()

        }, 1000)

    }, [])

    // return data

    return {
        data,
        error,
        isPending
    }
}

export default useFetch