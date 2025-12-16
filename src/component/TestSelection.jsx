import Logo from './../assets/Logo.svg'
import React, { useState } from 'react';
import TestChoise from './TestChoise';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom';
var testsLoaded = false;
export default function TestSelection(props) {

const [login, setLogin] = useState("");
const [password, setPassword] = useState("");
const [testsList, setTestsList] = useState([]);
  const navigate = useNavigate();
  const xhr = new XMLHttpRequest();
    useEffect(() => {
        getTestsList(props.token)

    }, []); 
function getTestsList(token){
    xhr.open('POST', props.url + '/getAvailableTests');
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
      if (xhr.status === 200) {
setTestsList(JSON.parse(xhr.responseText).tests)
      }}
      xhr.send(token);
}


    const back = { 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '40px',
        backgroundColor: '#FAFAFA',
        width: '95%',
        height: '760px',

        marginTop:'58px'
        
    };

    const loginInput= {
        marginTop: '0px',
        marginBottom: '10px',
        width:'150px',
        borderRadius: '5%',
        borderColor: 'black',
        borderStyle: 'solid',
         borderWidth: '1px',
    };

    const textStyle ={
        marginBottom: '0px',
    }
   
    const buttonStyle ={
        width: '10%',
        height: '5%',
        borderRadius: '20px',
        fontSize:'20pt'

    }


    function onChoose(test_id){
        props.onChoose(test_id, navigate);
    }

    return (
        <div style={back}>
           <h3 style={textStyle} >Выберите тест</h3>

   {testsList.map((test) => {return <TestChoise onClick = {onChoose} testId = {test.test_id} key={test.test_id} name={test.testName} subject={test.subject}></TestChoise>})}


          
        </div>
    )
}