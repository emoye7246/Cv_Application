import { useState } from "react";

    export class HeaderComponents{
    
    Names = (prop) => {

     return(   
        <>

            <h3>{prop}</h3>
            
        </>
     )

    }

    Occupation = (prop) => {

        return(   
            <>
                <div>{prop}</div>
            </>
         )

    }
    }

    export class SidepanelComponents {

    Email = (prop) => {

    return(   
        <>
            <div>{prop}</div>
        </>
     )

    }

    Phone = (prop) => {

        return(   
            <>
                <div>{prop}</div>
            </>
         )
    
        }
    }
    


    