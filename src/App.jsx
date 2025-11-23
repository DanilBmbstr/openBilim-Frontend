import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Component from './component/Component' // Правильный импорт
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

          <Header name="Имя Фамилия Отчество" group = "Уч.Группа" discipline = "Дисциплина" testName = "Название теста"/>
      <div>





      </div>

    </>
  )
}

export default App