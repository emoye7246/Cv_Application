import { use } from 'react'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import mail from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/maps-and-flags.png'

import { useState } from 'react'

export function App(){

    const [headerName, changeName] = useState('Enter Your Name')
    const [Occupation, changeOccupation] = useState('Enter Your Occupation')
    const [email, changeEmail] = useState('Provide an Email Address')
    const [phoneNumber, changeNumber] = useState('Provide Your Phone Number ')
    const [Address, changeAdress] = useState('Address Info')
    


    const changeHeaderName = (e) => {

        changeName(e.target.value)
        
    }

    const changeOccupationName = (e) => {

        changeOccupation(e.target.value)
    }

    const changeEmailName = (e) => {


        changeEmail(e.target.value)
    }

    const changePhoneNumber = (e) => {

        changeNumber(e.target.value)
    }


    return (

        <>
            <div className="App">
                <div className="sidebar">

                    <h1>Resume Creator</h1>

                    <div className="labels">

                    <div className="labelStyle">
                        <label htmlFor="Name">Name</label>
                        <input type="text" onChange={changeHeaderName} placeholder='John Doe'/>

                        <label htmlFor="Name">Email-Address</label>
                        <input type="text" onChange={changeEmailName} placeholder='react@icloud.com'/>
                    </div>

                    <div className="labelStyle">

                        <label htmlFor="Occupation">Occupation</label>
                        <input type="text" onChange={changeOccupationName} placeholder='Financial Advisor' id='Occupation'/>

                        <label htmlFor="Name">Phone Number</label>
                        <input type="text" onChange={changePhoneNumber} placeholder='XXX-XXX-XXXX'/>

                    </div>

                </div>
                </div>

                <div className="cvDisplay">

                    <div className="header">

                            <img src="" alt="" id='images'/>

                            <div className="headerContents">
                                <h3>{headerName}</h3>
                                <div>{Occupation}</div>
                            </div>
                            
                    </div>

                    <div className="cvBody">
                        
                            <div id="sidePanel">

                                <h3>Contact Information</h3>
                                
                                <div id="contactDetails">

                                    <div className="contactInfo">
                                        <img src={mail} alt="" width='30px' height='30px' id='icon'/>
                                        <div>{email}</div>
                                    </div>

                                    <div className="contactInfo">
                                        <img src={phone} alt="" width='30px' height='30px' id='icon' />
                                        <div>{phoneNumber}</div>
                                    </div>

                                    <div className="contactInfo">

                                        <img src={address} alt="" width='30px' height='30px' id='icon' />
                                        <div>{Address}</div>
                                    </div>
                                </div>


                            </div>

                            <div id="cvInfo">

                            </div>
                    </div>

                </div>
            </div>
        </>
    )
}