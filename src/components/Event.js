import React from 'react';

const Event = () => {

    const courseName = "React.Js Tutorial";
    const selectedState = "Goa";

    const showWelcome = () => {
        alert("Welcome To React Tuturial")
    }
    const showWelcome2 = () => {
        alert("Dummy Func")
    }

    const showMessage = (message) => {
        alert(message)
    }
    const onStateChange =() => {
        alert("State Changed")
    }
    const onTextChange =() => {
        console.log("Text Box Value Chnages")
    }
    const onMouseIn =() => {
        console.log("Mouse Entered")
    }
    const onMouseLeft =() => {
        console.log("Mouse Left")
    }

    return (
        <div>
            <button onClick={showWelcome}> Show Welcome</button>
            <br/>
            {/* <button onClick={showWelcome2()}> Btn 2 </button> */}
            <br/>
            <button onClick={() => {showMessage('Angular')}}> Show Angular</button>
            <br/>
            <button onClick={() => {showMessage('React')}}> Show React</button>
            <br/>
            <button onClick={() => {showWelcome()}}> Show Welcome 2</button>

            <br/>
            <select value={selectedState} onChange={onStateChange}>
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Goa</option>
                <option>Punjab</option>
            </select>
            <input type='text' onChange={onTextChange} />

            <div onMouseEnter={onMouseIn} onMouseLeave={onMouseLeft} style={{width:'200px',height:'200px',backgroundColor:'red'}}>
                Div Area - {courseName}
            </div>
            <span> {courseName}</span>
            <input type='text' value={courseName} />
        </div> 
    );
};

export default Event;