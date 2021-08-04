import React, { useEffect, useState } from 'react'
import Axios from "axios"
const Home = () => {

    const [json, setjson] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:5000/api/getAll").then(res => {
            console.log(res.data)
            setjson(res.data)
        }).catch(err => {
            console.log(err)
        })


    }, [])
    return (
        <div>
            <h4>{JSON.stringify(json)}</h4>
        </div>
    )
}

export default Home
