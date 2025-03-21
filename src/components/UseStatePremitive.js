import React, { useState } from 'react';

const UseStatePremitive = () => {

    let courseName = "Angular";

    let [courseDuration,setCourseDuration] = useState("2 Months");

    let [courseTitle, setCourseTtile] = useState("Fro Sc rah");
    let [isActive, setIsActive ] = useState(false);

    const changeCourse = () => {
        debugger;
        courseName = "React";
    }

    const changeIsActiev =  (event)=> {
        debugger;
        setIsActive(event.target.checked)
    }

    const changeDuration = () => {
        debugger;
        setCourseDuration("3 Months")
        setTimeout(() => {
            setCourseTtile("asdas as as")
        }, 5000); 
    }

    const changeCourseName = (event) => {
        debugger;
        setCourseDuration(event.target.value)
    }

    return (
        <div>
            <span> Course Name: {courseName}</span>
            <br></br>
            <button onClick={changeCourse}>Change Course Name </button>
            <br></br>
            <h3>Duration: {courseDuration} - {courseTitle}</h3>
            <br></br>
            <button onClick={changeDuration}>Change Duration </button>
            <input type='text' onChange={(event)=>{changeCourseName(event)}} />
            <br></br>
            <input type='checkbox' onChange={(eve)=>{changeIsActiev(eve)}} />
             --{isActive?'True':'False'}
        </div>
    );
};

export default UseStatePremitive;