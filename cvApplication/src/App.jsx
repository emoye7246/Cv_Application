import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import { useState } from 'react'

export function App(){

    const [headerName, changeName] = useState('Enter Your Name')
    const [Occupation, changeOccupation] = useState('Enter Your Occupation')
    const [email, changeEmail] = useState('Provide an Email Address')


    const changeHeaderName = (e) => {

        changeName(e.target.value)
        
    }

    const changeOccupationName = (e) => {

        changeOccupation(e.target.value)
    }

    const changeEmailName = (e) => {


        changeEmail(e.target.value)
    }


    return (

        <>
            <div className="App">
                <div className="sidebar">

                    <h1>Resume Creator</h1>

                    <label htmlFor="Name">Enter Your Name</label>
                    <input type="text" onChange={changeHeaderName} placeholder='John Doe'/>

                    <label htmlFor="Occupation">Enter Your Occupation</label>
                    <input type="text" onChange={changeOccupationName} placeholder='Financial Advisor' id='Occupation'/>


                    <label htmlFor="Name">Enter Your Email-Address</label>
                    <input type="text" onChange={changeEmailName} placeholder='react@icloud.com'/>

                    <label htmlFor="Name">Enter Your phoneNumber</label>
                    <input type="text" onChange={changeOccupationName} placeholder='Financial Advisor'/>

                </div>

                <div className="cvDisplay">

                    <div className="header">

                            <img src="" alt="" id='images'/>

                            <div className="headerContents">
                                <div>{headerName}</div>
                                <div>{Occupation}</div>
                            </div>
                            
                    </div>

                    <div className="cvBody">
                        
                            <div id="sidePanel">

                                <h3>Contact Information</h3>

                                <div>{email}</div>


                            </div>

                            <div id="cvInfo">

                            </div>
                    </div>

                </div>
            </div>
        </>
    )
}