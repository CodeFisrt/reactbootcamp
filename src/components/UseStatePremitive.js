import React, { useState } from 'react';

const UseStatePremitive = () => {

    let courseName = "Angular";

    let [courseDuration,setCourseDuration] = useState("2 Months");

    let [courseTitle, setCourseTtile] = useState("Fro Sc rah");

    const changeCourse = () => {
        debugger;
        courseName = "React";
    }

    const changeDuration = () => {
        debugger;
        setCourseDuration("3 Months")
        setTimeout(() => {
            setCourseTtile("asdas as as")
        }, 5000);
       
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
        </div>
    );
};

export default UseStatePremitive;