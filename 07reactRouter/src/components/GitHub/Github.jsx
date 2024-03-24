import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
const Github = () => {
const data=useLoaderData()
    // const [data, setData] = useState()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Smit-patel-2133')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, []);
    return (
        <>
            <div className='text-center bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
                <img src={data.avatar_url} alt={"Git Picture"} width={300}></img></div>
        </>
    )
};

export default Github;
export const githubInfoLoader= async ()=>{
    const response=await  fetch('https://api.github.com/users/Smit-Patel-2133')
    return response.json()
}
