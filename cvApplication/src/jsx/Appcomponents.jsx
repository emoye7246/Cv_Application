import { useState } from "react"

export function Test({names}){

    const [names, changeMe] = useState(names)

    changeMeNow = () => {

        changeMe(e.target.value)
    } 

    return (

        <>
            <div>{names}</div>
        </>
    )

}