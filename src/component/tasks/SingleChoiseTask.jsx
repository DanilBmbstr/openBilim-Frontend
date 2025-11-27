import { useState } from "react"
import SingleChoiseOption from "./SingleChoiseOption"

export default function SingleChoiseTask(props){



    const formStyle ={
textAlign: "Left"
    }

        const textStyle = {
        fontSize: "20pt",
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    hyphens: 'auto', // Автоматические переносы (работает не во всех браузерах)
    lineHeight: '1.4', // Увеличиваем межстрочный интервал для читаемости
    textAlign: 'left',
    width: '100%',
    }

    return <>
    

    <p style={textStyle}>{props.taskText}</p>
<form style={formStyle} onChange={(event)=>{props.onSelect(props.options.indexOf(event.target.value))}}>

{props.options.map((option) => { return < SingleChoiseOption type={"radio"} key={option} option={option}></SingleChoiseOption>})}

</form>
    </> 
}