import mail from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/assets/Reference/maps-and-flags.png'

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

    export class SidepanelComponents {

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


    }
    }
    


    