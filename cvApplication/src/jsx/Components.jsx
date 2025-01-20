import { useState } from "react";

export function Test({name, nameC}){


    const [inputName, inputChange] = useState('Change')

    const inputChangeNow = () => {

        inputChange(e)
    }

    return (

        <>
        <div className="hello">
            <label htmlFor="Name">{inputName}</label>
            <input type="text" onChange={inputChangeNow} />
        </div>
        </>
    )
}