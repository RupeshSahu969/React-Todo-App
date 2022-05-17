import React, { Fragment, useState } from "react";

const Counter = () => {
    

const [count,setCount] =useState(0);

// const incrementCount =() =>{
//     console.log("pre",count)
//     setCount(count+1);

//     console.log("post",count)

// }
// const decrementCount =() =>{
//     console.log("pre",count)
//     setCount(count-1);

//     console.log("post",count)

// }

    return (
        <Fragment>
        <div>
            <h1>Counter App: {count}</h1>
            <button onClick={() => setCount(count +1)}>Increent</button>
            <button onClick={
                
                () =>{
                    if(count >0)
                    setCount(count -1)
                    }}>Decrement</button>
        </div>
        </Fragment>
    );
}

export default Counter;