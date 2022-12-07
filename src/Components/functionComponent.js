import { useEffect, useState } from "react";

const FunComponent =()=>{

    const [count,setCount] = useState(0)
    const [state,setState] = useState("")

    // const setcount =()=>{
    //     setCount(count+1)
    // }

    useEffect(()=>{
        console.log("count Value",state);
    },[state])


    const setstate =(e)=>{
        setState(e.target.value)
    }

    return(
        <div className="container">
            <div>Function Component</div>
            <button onClick={()=>{setCount(count+1)}}> Set the Count + 1</button>
            <div>{count}</div>
            <h2>Set Value onChange</h2>
            <input type='text' onChange={(e)=>{setState(e.target.value)}}/>
            <div>{state}</div>
        </div>
    )
}

export default FunComponent;