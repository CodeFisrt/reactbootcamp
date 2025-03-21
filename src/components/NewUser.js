import React, { use, useState } from 'react';

const NewUser = () => {
    // const [name,setName]= useState("");
    // const [city,setcity]= useState("");
    // const [mobile,setmobile]= useState("");

    const [userObj,setUserObj]= useState({name:'',city:'',mobile:''});

    const [cityList,setCityList]  = useState(['Pune',"Mumbai"]);
    const [cityName,setCityName] = useState("");

    const addCity = () => {
        setCityList(oldList => [...oldList,cityName])
    }
    
    const changeName= (event)=> {
        setUserObj(oldObj =>({...oldObj,name:event.target.value}));
    } 
    const changecity= (event)=> {
        setUserObj(oldObj =>({...oldObj,city:event.target.value}));
    } 
    const changemobile= (event)=> {
        setUserObj(oldObj =>({...oldObj,mobile:event.target.value}));
    } 

    const updateFormValue =(event,key)=>{
        setUserObj(oldObj =>({...oldObj,[key]:event.target.value}));
    }

    return (
        <div>
            <input type='text' onChange={(event)=>{updateFormValue(event,'name')}}  placeholder='Enter Name'/>
            <input type='text' onChange={(event)=>{updateFormValue(event,'city')}}  placeholder='Enter City'/>
            <input type='text' onChange={(event)=>{updateFormValue(event,'mobile')}}  placeholder='Enter Mobile'/>
            <input type='button'   value='Save'/>
            <br></br>
            name: {JSON.stringify(userObj)}
            <br>  </br>
            <input type='text' onChange={(event)=>{setCityName(event.target.value)}}  placeholder='Enter City Name'/>
            <input type='button'  onClick={addCity}  value='Add City'/> -- {cityName}
            <br></br>
            City List: {cityList}
        </div>
    );
};

export default NewUser;