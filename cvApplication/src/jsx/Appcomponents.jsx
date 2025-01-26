import mail from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/maps-and-flags.png'
import url from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/url.png'

    export const HeaderComponents = ({Name, Occupation}) => {

        return (

            <>
                    <div className="Information">

                        <div className="myLabels">
                            <label htmlFor="">
                                <div>Name</div>
                                <input type="text" onChange={Name} />
                            </label>


                            <label htmlFor="">
                                <div>Occupation</div>
                                <input type="text" onChange={Occupation} />
                            </label>
                        </div>
                    </div>
            </>
        )
    }

    export const HeaderPage = ({Name, Occupation}) => {
        
        return (

            <>
                <div className="HeaderContent">

                    <h3>{Name}</h3>
                    <div>{Occupation}</div>
                </div>
            </>
        )
    }

    export const ContactComponents = ({Email, Phone, Address, Website}) => {

        return (

            <>  

                    <div className="contactDetailsLabels">

                        <div className='myLabels'>

                            <label htmlFor="Email">
                                <div>Email</div>
                                <input type="email" name="Email" id="Email" onChange={Email} required />
                            </label>

                            <label htmlFor="Phone">
                                <div>Phone Number</div>
                                <input type="tel" name="phone" id="Phone" placeholder='XXX-XXX-XXXX' onChange={Phone} />
                                <div>(optional)</div>
                            </label>

                        </div>

                        <div className='myLabels'>

                            <label htmlFor="Address">
                                <div>Address</div>
                                <input type="text" name='Address' onChange={Address} />
                            </label>

                            <label htmlFor="Website">
                                <div>Website</div>
                                <input type="url" name="Website" id="Website" onChange={Website} />
                            </label>

                        </div>
                    </div>
            </>
        )
    }

    export const ContactPage = ({Email, Phone, Address, Website}) => {

        return (   

            <>

                <div className='contactDetails'>

                    <div className="contacts">
                        <img src={mail} alt="" height={'20px'} width={'20px'}/>
                        <div>{Email}</div>
                    </div>

                    <div className="contacts">
                        <img src={phone} alt="" height={'20px'} width={'20px'}/>
                        <div>{Phone}</div>
                    </div>

                    <div className="contacts">
                        <img src={address} alt="" height={'20px'} width={'20px'}/>
                        <div>{Address}</div>
                    </div>

                    <div className="contacts">
                        <img src={url} alt="" height={'20px'} width={'20px'}/>
                        <div>{Website}</div>
                    </div>
                </div>


            </>
        
        )

    }

     export  const  EducationLabel = ({Educations, Field, Start, End}) => {

            return (

                <>
                        <div className="EducationLabels">

                            <div className='myLabels'>
                        
                                <label htmlFor="Education">
                            <div>School Name</div>
                            <input type="text" onChange={Educations} />
                                </label>

                                <label htmlFor="Field">
                                    <div>Field of Study</div>
                                    <input type="text" name="Field" id="Field" onChange={Field} />
                                </label>
                            </div>

                            <div className='myLabels'>

                                <label htmlFor="Start">
                                    <div>Start Term</div>
                                    <input type="number" name="Start" id="Start" onChange={Start} max={2025}/>
                                </label>

                                <label htmlFor="End">
                                    <div>End Term</div>
                                    <input type="number" name="End" id="End" onChange={End} max={2025}/>
                                </label>

                            </div>
                        </div>

                </>
            )
    }



      export const  EducationDisplay = ({schoolName, field, startTerm, endTerm}) => {

            return (

                <>

                        <div className="educationDetails">
                            <div><strong>{schoolName}</strong></div>
                            <div>{field}</div>
                            <div>{startTerm} - {endTerm}</div>
                        </div>
                   
                </>
            )
    }



    export function SummaryLabel(){


        return (

            <>
                <div className="myLabels">
                    
                    <label htmlFor="Summary">
                        <textarea name="Summary" id="Summary" rows='10' cols='40'></textarea>
                    </label>
                </div>
            </>
        )

    }

    
    
    


    