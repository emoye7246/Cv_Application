import { useState } from "react"


export function Header(
    {
        name, 
        Occupation
    }
){
    

    return (

    <>
        <header id="header">

            <div id="headerContent">
                <img src="" alt="" id="pfp" />

            

                <div id="myInfo">

                    <div id="nameInfo">
                        <div>{name}</div>
                    </div>

                    <div id="subHeading">
                        <h4>{Occupation}</h4>
                    </div>
                </div>
            </div>


            <div>Hello</div>
        </header>


        
    </>
    )

}