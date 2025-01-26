import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/Components.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/sidebar.css'
import { useState } from 'react'
import { HeaderComponents, Summaries, EducationLabel, EducationDisplay, HeaderPage, ContactComponents, ContactPage} from './jsx/Appcomponents'
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

    const [Educationinfo, updatedEdu] = useState({

        School: 'School Name', 
        Field: 'Field of Study', 
        Start: 'Start Term', 
        End: 'End Term', 

    })

    const handleEducation = {

        School: (e) => updatedEdu({...Educationinfo, School: e.target.value}),
        Field: (e) => updatedEdu({...Educationinfo, Field: e.target.value}),
        Start: (e) => updatedEdu({...Educationinfo, Start: e.target.value}), 
        End: (e) => updatedEdu({...Educationinfo, End: e.target.value}),


    }



    return (

        <>
            <div className="App">

                <div className="sidebar">

                    <h1>Resume Creator</h1>

                    <h3>Information</h3>

                        <HeaderComponents Name={handleFunctions.Name} Occupation={handleFunctions.Occupation} />

                    <h3>Contact Details</h3>

                        <ContactComponents Email={handleFunctions.Email} Phone={handleFunctions.Phone} Address={handleFunctions.Address} Website={handleFunctions.Website}/>
                        
                    <h3>Education</h3>
                    
                       <EducationLabel Educations={handleEducation.School} Field={handleEducation.Field} Start={handleEducation.Start} End={handleEducation.End} />


                    <h3>Skills</h3>

                    <h3>Summary</h3>

                    <div className="SummaryLabels">

                        <Summaries />

                    </div>

                    <h3>Work Experience</h3>

                    <h3>Refrences</h3>


                </div>

                <div className="cvDisplay">

                    <div className="Header">

                        <div className="profilePic">
                            <img src="" alt="" width={'50px'} height={'50px'} id='pfp' />
                        </div>

                        <div className="HeaderContent">

                            <HeaderPage Name={input.Name} Occupation={input.Occupation} />

                        </div>

                    </div>

                    <div className="cvBody">

                        <div className="sidePanel">

                            <ContactPage Email={input.Email} Phone={input.Phone} Address={input.Address} Website={input.Website}/>

                            <EducationDisplay schoolName={Educationinfo.School} field={Educationinfo.Field} startTerm={Educationinfo.Start} endTerm={Educationinfo.End}/>

                        </div>

                        <div className="cvRight">

                            <div>Hello</div>

                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}