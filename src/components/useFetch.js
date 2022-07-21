import {useState,useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data,setData]=useState("");
    const [neighbour,setNeighbour]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    useEffect(
        ()=>{
            setLoading(true)
            axios.get(url)
            .then(
                response=>{
                    setData(response.data[0])
                    setNeighbour(response.data[0].borders[0])
                }
            )
            .catch(
                (error)=>{setError(error)}
            ).finally(
                setLoading(false)
            )
        },[url]
    )
 return {data,neighbour,loading,error}
}

export default useFetch