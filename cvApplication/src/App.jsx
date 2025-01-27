import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/cvDisplay.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/Components.css'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/sidebar.css'
import { useState } from 'react'
import { HeaderComponents, EducationLabel, EducationDisplay, HeaderPage, ContactComponents, ContactPage, SummaryLabel, SkillLabels, SkillsPage, SummaryPage} from './jsx/Appcomponents'
export function App(){

    // Inputs
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

    // Education Info

    const [Educationinfo, updatedEdu] = useState({

        School: 'School Name', 
        Field: 'Field of Study', 
        Start: 'Start Term', 
        End: 'End Term', 

        addEducation: []

    })

    const handleEducation = {

        School: (e) => updatedEdu({...Educationinfo, School: e.target.value}),
        Field: (e) => updatedEdu({...Educationinfo, Field: e.target.value}),
        Start: (e) => updatedEdu({...Educationinfo, Start: e.target.value}), 
        End: (e) => updatedEdu({...Educationinfo, End: e.target.value}),

        AddEdu: () => {

            

            const newDiv = {id: Educationinfo.addEducation.length + 1}
            updatedEdu((prevEdu) => ({

                ...prevEdu, addEducation: [...prevEdu.addEducation, newDiv]
            }))
        }

    }

    // SkillsInfo

    const [SkillInfo, updateSkills] = useState({

        SkillName: 'Skill', 
        SkillLevel: 'Beginner', 

        addSkill: []
    })

    const handleSkills = {

        SkillName: (e) => updateSkills({...SkillInfo, SkillName: e.target.value}), 
        SkillLevel: (e) => updateSkills({...SkillInfo, SkillLevel: e.target.value}), 

        addSkill: ''

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

                       {Educationinfo.addEducation.map((label) => ( <EducationLabel Educations={handleEducation.School} Field={handleEducation.Field} Start={handleEducation.Start} End={handleEducation.End} key={label.id}/>))}

                       <button onClick={handleEducation.AddEdu}>Add Education</button>


                    <h3>Skills</h3>

                        <SkillLabels  Skill={handleSkills.SkillName} Level={handleSkills.SkillLevel}/>

                        {SkillInfo.addSkill.map((skill) => (<SkillLabels Skill={handleSkills.SkillName} Level={handleSkills.SkillLevel}/>))}

                        <button>Add Skill</button>


                    <h3>Summary</h3>


                        <SummaryLabel />

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

                        <h3>Contact Details</h3>

                            <ContactPage Email={input.Email} Phone={input.Phone} Address={input.Address} Website={input.Website}/>

                        <h3>Education</h3>
                        
                            <EducationDisplay schoolName={Educationinfo.School} field={Educationinfo.Field} startTerm={Educationinfo.Start} endTerm={Educationinfo.End}/>

                            {Educationinfo.addEducation.map((label) => (<EducationDisplay schoolName={Educationinfo.School} field={Educationinfo.Field} startTerm={Educationinfo.Start} endTerm={Educationinfo.End} key={label.id}/>))}
                        <h3>Skills</h3>

                            <SkillsPage Skill={SkillInfo.SkillName} Level={SkillInfo.SkillLevel}/>

                            {SkillInfo.addSkill.map((skill) => (<SkillsPage Skill={SkillInfo.SkillName} Level={SkillInfo.SkillLevel}/>))}
                        </div>

                        <div className="cvRight">

                            <SummaryPage />

                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}