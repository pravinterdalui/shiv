import { useEffect, useState } from "react"



export function DataBinding(){

        const[uname,setUname]=useState('Pravin');
        const[email,setEmail]=useState('e.g: some@gmail.com');

        useEffect(()=>{
            setUname("John");
            setEmail("pravin@gmail.com")
        },[])

    return(
        <div className="container-fluid mt-5">
                <h2>Data Binding</h2>
                <p>Hello ! {uname}</p>
                <p>your Email:{email}</p>
        </div>
    )
}