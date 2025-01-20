import '/Users/elijahmoye/Desktop/cvApplication/Cv_Application/cvApplication/src/css/style.css'
import { Test } from './jsx/Components'

export function App(){

    let Hello =  (<Test />)

        return (

            <div className="App">

                <div className="Sidepanel">

                    <Test prop={Hello} />

                </div>

                <div className="cvApp">

                        <div>{Hello}</div>
                </div>
            </div>
        )
}