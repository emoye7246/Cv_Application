import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/Components.css'
import mail from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/maps-and-flags.png'
import { useState } from 'react'
import {Names, Occupation } from './jsx/Appcomponents'

export function App(){

    const [input, Updated] = useState({

        Name: 'Name Here', 
        Occupation: 'Occupation Here'
    })

    const handleFunctions = {

    Name: (e) => Updated({...input, Name: e.target.value}) 

    }

    return (

        <>
            <div className="App">

                <div className="sidebar">

                    <h1>Resume Creator</h1>

                    <h3>Information</h3>

                    <label htmlFor="">
                        <div>Name</div>
                        <input type="text" onChange={handleFunctions.Name} />
                    </label>
                    {/* Maybe chane labels to componets */}

                </div>

                <div className="cvDisplay">

                    <div className="Header">
                        <Names Name={input.Name}/>
                        <Occupation Occupation={input.Occupation} />
                    </div>

                </div>
            </div>
        </>
    )
}