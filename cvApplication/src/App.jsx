import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/Components.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/sidebar.css'
import mail from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/maps-and-flags.png'
import { useState } from 'react'
import { HeaderComponents, SidepanelComponents } from './jsx/Appcomponents'
export function App(){

    const [input, Updated] = useState({

        Name: 'Name Here', 
        Occupation: 'Occupation Here', 
        Email: 'Email Here'
    })

    const handleFunctions = {

    Name: (e) => Updated({...input, Name: e.target.value}), 
    Occupation: (e) => Updated({...input, Occupation: e.target.value}), 
    Email: (e) => Updated({...input, Email: e.target.value})

    }

    return (

        <>
            <div className="App">

                <div className="sidebar">

                    <h1>Resume Creator</h1>

                    <h3>Information</h3>

                    <div className="Information">

                        <label htmlFor="">
                            <div>Name</div>
                            <input type="text" onChange={handleFunctions.Name} />
                        </label>


                        <label htmlFor="">
                            <div>Occupation</div>
                            <input type="text" onChange={handleFunctions.Occupation} />
                        </label>
                    </div>

                    <h3>Contact Details</h3>

                    <div className="contactDetails">

                            <label htmlFor="">
                                <div>Email</div>
                                <input type="text"  />
                            </label>

                            <label htmlFor="Phone">
                                <div>Phone Number</div>
                                <input type="tel" name="phone" id="Phone" placeholder='XXX-XXX-XXXX' />
                                <div>(optional)</div>
                            </label>
                    </div>

                </div>

                <div className="cvDisplay">

                    <div className="Header">

                        <div className="profilePic">
                            <img src="" alt="" width={'50px'} height={'50px'} id='pfp' />
                        </div>

                        <div className="HeaderContent">
                            {new HeaderComponents().Names(input.Name)}
                            {new HeaderComponents().Occupation(input.Occupation)}
                        </div>

                    </div>

                    <div className="sidePanel">

                        <h3>Contact Details</h3>


                    </div>

                    

                </div>
            </div>
        </>
    )
}