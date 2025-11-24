import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Component from './component/Component' // Правильный импорт
import Header from './component/Header'
import Login from './component/Login'

function App() {



  const url = "http://localhost:8080"

  var token = ""
  const [name, setName] = useState("")
  const [group, setGroup] = useState("")




  const xhr = new XMLHttpRequest();

  function authorization(log, pas)
  {
          token = ""
          xhr.open('POST', url + '/auth');
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
      if (xhr.status === 200) {
        if(xhr.responseText == "Error: User not found") {setName("Error: User not found"); setGroup("Ошибка: неверный логин или пароль"); return}
        token = (xhr.responseText);


         xhr.open('POST', url + '/getUserData');
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function() {
      if (xhr.status === 200) {

        setName(JSON.parse(xhr.responseText).fio);
        setGroup(JSON.parse(xhr.responseText).group);
      }}
          xhr.send(token);
      }}
          xhr.send(JSON.stringify({
             "login": log,
              "password": pas
        }
      
      
      ));

      
  }


  return (
    <>

      <Header name={name} group={group} discipline="Дисциплина" testName="Название теста" />
      <div className="content">

        <Login onClick={authorization}></Login>



      </div>

    </>
  )
}

export default App