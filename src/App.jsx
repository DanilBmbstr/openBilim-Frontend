import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Component from './component/Component' // Правильный импорт
import Header from './component/Header'
import Login from './component/Login'
import TestSelection from './component/TestSelection'
function App() {



  const url = "http://localhost:8080"

  var token = ""
  const[tokenState, setTokenState] = useState("")
  const [name, setName] = useState("")
  const [group, setGroup] = useState("")
  const [error, setError] = useState("")
  const [screen, setScreen] = useState("auth")


  const xhr = new XMLHttpRequest();

  

  function authorization(log, pas)
  {
          token = "";
          xhr.open('POST', url + '/auth');
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
      if (xhr.status === 200) {
        if(xhr.responseText == "Error: User not found") {setError("Ошибка: неверный логин или пароль"); return}
        token = (xhr.responseText);


         xhr.open('POST', url + '/getUserData');
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
      if (xhr.status === 200) {

        setName(JSON.parse(xhr.responseText).fio);
        setGroup(JSON.parse(xhr.responseText).group);
        setError("");
        setScreen("testSelection")
      }}
          xhr.send(token);
          setTokenState(token);
      }}
          xhr.send(JSON.stringify({
             "login": log,
              "password": pas
        }
      
      
      ));

      
  }

  function startTest(test_id){
       xhr.open('POST', url + '/startTest');
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
      if (xhr.status === 200) {
        if(xhr.responseText == "Error: This user has unfinished session") {setError("Вы уже проходите тестирование");

          return;
        }
setScreen("test");
      }}
      xhr.send(JSON.stringify({

        "user_token": tokenState,
    "test_id": test_id

      }));
  }

if(screen == "auth"){

  
  return (
    <>

      <Header name={name} group={group} discipline="Дисциплина" testName="Название теста" />
      <div className="content">
<div className="mainPageContent">
        <Login onClick={authorization}></Login>
<br />
        <h1 className="errorMessage">{error}</h1>
</div>
      </div>

    </>
  )
}
else if(screen == "testSelection")
{
  return (
    <>

      <Header name={name} group={group} discipline="Дисциплина" testName="Название теста" />
      <div className="content">
<div className="mainPageContent">
        <TestSelection onChoose = {startTest} url = {url}token = {tokenState}></TestSelection>
<br />
        
        <p className="errorMessage">{error}</p>
</div>
      </div>

    </>
  )
}

}
  


export default App