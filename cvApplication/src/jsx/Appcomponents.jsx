import mail from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/maps-and-flags.png'
import url from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/url.png'

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

    export class Contact {

    Email = (prop) => {

        return (   

            <>
                <div className="contacts">
                    <img src={mail} alt="" height={'20px'} width={'20px'}/>
                    <div>{prop}</div>
                </div>
            </>
        
        )

    }

    Phone = (prop) => {

        return (   

            <>
                <div className="contacts">
                    <img src={phone} alt="" height={'20px'} width={'20px'}/>
                    <div>{prop}</div>
                </div>
            </>
        
         )
    
        }

    Address = (prop) => {

        return (
            <>
                <div className="contacts">
                    <img src={address} alt="" height={'20px'} width={'20px'}/>
                    <div>{prop}</div>
                </div>
            </>
        )
    }

    Website = (prop) => {


        return (
            <>
                <div className="contacts">
                    <img src={url} alt="" height={'20px'} width={'20px'}/>
                    <div>{prop}</div>
                </div>
            </>
        )

    }
    }

    export class Education{

        constructor(prop){

            this.prop = prop
        }

        EducationLabel = (handleChange) => {

            return (

                <>
                    <div className='myLabels'>
                        
                        <label htmlFor="Education">
                            <div>School Name</div>
                            <input type="text" onChange={handleChange} />
                        </label>

                        <label htmlFor="Field">
                            <div>Field of Study</div>
                            <input type="text" name="Field" id="Field" onChange={handleChange} />
                        </label>
                    </div>

                    <div className='myLabels'>

                        <label htmlFor="Start">
                            <div>Start Term</div>
                            <input type="number" name="Start" id="Start" onChange={handleChange} />
                        </label>

                        <label htmlFor="End">
                            <div>Start Term</div>
                            <input type="number" name="End" id="End" onChange={handleChange} />
                        </label>

                    </div>
                </>
            )
        }

        EducationDisplay = ({schoolName, field, startTerm, endTerm}) => {

            return (

                <>
                    <div>{schoolName}</div>
                    <div>{field}</div>
                    <div>{startTerm}</div>
                    <div>{endTerm}</div>
                </>
            )
        }
    }
    


    