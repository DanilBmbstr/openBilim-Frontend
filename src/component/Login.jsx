import Logo from './../assets/Logo.svg'
import React, { useState } from 'react';

export default function Login(props) {

const [login, setLogin] = useState("");
const [password, setPassword] = useState("");

const handleEmail = (event) => {
    setLogin(event.target.value);

}

const handlePassword = (event) => {
    setPassword(event.target.value);

}


const handleLoginClick = () => {
    props.onClick(login, password); // Вызов функции только при клике
}

    const back = { 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: '40px',
        backgroundColor: '#FAFAFA',
        width: '95%',
        height: '760px',
        alignItems: 'center',
        justifyContent: 'center',
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
    return (
        <div style={back}>
           <h2 style={textStyle} >Эл.Почта: </h2>
           
           <input type="text" style={loginInput} onChange={handleEmail}/>
            <h2 style={textStyle}>Пароль: </h2>
           
           <input type="password" style={loginInput} onChange={handlePassword}/>

           <button style={buttonStyle} onClick={handleLoginClick}>Войти</button>
        </div>
    )
}