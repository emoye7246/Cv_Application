import VileLogo from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/VileGames (1).png'
import { Header } from './header'
import { useState } from 'react'
import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/sidebar.css'





export function Sidebar(){

    const [names, chaneName] = useState('Enter Name')
    const [Occupations, changeOccupation] = useState('Enter Occupation')

    return (

        <>
            <Header name={names} Occupation={Occupations}/>


                <div id='sideContent'>

                    <img src={VileLogo} alt="" id="logo" />

                <form id='forms' >

                    <h1>Personal Information</h1>

                    <div id="formData">

                        <div>
                            <label htmlFor='Name'>First Name</label>
                            <input 
                            type="text" 
                            name="" 
                            id="Name" 
                            onChange={(e) => chaneName(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='Name'>Last Name</label>
                            <input 
                            type="text" 
                            name="" 
                            id="Name" 
                            onChange={(e) => changeOccupation(e.target.value)}/>
                        </div>
                    </div>

                    <h1>Work Excperience</h1>


                    <div id="formData">

                        <div>
                            <label htmlFor='Name'>First Name</label>
                            <input 
                            type="text" 
                            name="" 
                            id="Name" 
                            onChange={(e) => chaneName(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='Name'>Last Name</label>
                            <input 
                            type="text" 
                            name="" 
                            id="Name" 
                            onChange={(e) => changeOccupation(e.target.value)}/>
                        </div>
                    </div>
                </form>

                </div>
        </>
    )
}