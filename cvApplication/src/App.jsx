import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/Components.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/sidebar.css'
import { useState } from 'react'
import { HeaderComponents, Contact, Education} from './jsx/Appcomponents'
export function App(){

    const [input, Updated] = useState({

        Name: 'Name Here', 
        Occupation: 'Occupation Here', 
        Email: 'Email Here', 
        Phone: 'Phone Number', 
        Address: 'Address', 
        Website: 'Url...'
    })

    const handleFunctions = {

    Name: (e) => Updated({...input, Name: e.target.value}), 
    Occupation: (e) => Updated({...input, Occupation: e.target.value}), 
    Email: (e) => Updated({...input, Email: e.target.value}), 
    Phone: (e) => Updated({...input, Phone: e.target.value}), 
    Address:  (e) => Updated({...input, Address: e.target.value}), 
    Website: (e) => Updated({...input, Website: e.target.value})

    }

    return (

        <>
            <div className="App">

                <div className="sidebar">

                    <h1>Resume Creator</h1>

                    <h3>Information</h3>

                    <div className="Information">

                        <div className="myLabels">
                            <label htmlFor="">
                                <div>Name</div>
                                <input type="text" onChange={handleFunctions.Name} />
                            </label>


                            <label htmlFor="">
                                <div>Occupation</div>
                                <input type="text" onChange={handleFunctions.Occupation} />
                            </label>
                        </div>
                    </div>

                    <h3>Contact Details</h3>

                    <div className="contactDetailsLabels">

                        <div className='myLabels'>

                            <label htmlFor="Email">
                                <div>Email</div>
                                <input type="email" name="Email" id="Email" onChange={handleFunctions.Email} required />
                            </label>

                            <label htmlFor="Phone">
                                <div>Phone Number</div>
                                <input type="tel" name="phone" id="Phone" placeholder='XXX-XXX-XXXX' onChange={handleFunctions.Phone} />
                                <div>(optional)</div>
                            </label>

                        </div>

                        <div className='myLabels'>
                            
                            <label htmlFor="Address">
                                <div>Address</div>
                                <input type="text" name='Address' onChange={handleFunctions.Address} />
                            </label>

                            <label htmlFor="Address">
                                <div>Website</div>
                                <input type="text" name='Address' onChange={handleFunctions.Website} />
                            </label>


                        </div>
                        

                            
                    </div>

                    <h3>Education</h3>

                    <div className="EducationLabels">

                        {new Education().EducationLabel()}


                        <button className="Addedu">Add Education</button>
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

                        <div className='contactDetails'>
                            {new Contact().Email(input.Email)}
                            {new Contact().Phone(input.Phone)}
                            {new Contact().Address(input.Address)}
                            {new Contact().Website(input.Website)}
                        </div>

                        <h3>Education</h3>

                        <div className="educationDetails">
                            <div>Hello</div>
                        </div>




                    </div>

                    

                </div>
            </div>
        </>
    )
}