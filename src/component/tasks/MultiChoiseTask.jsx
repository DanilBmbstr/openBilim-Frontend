import { useState } from "react"
import { useEffect } from "react"
import MultiChoiseOption from "./MultiChoiseOption";

export default function MultiChoiseTask(props){

const[choses, setChoses] = useState([]);

useEffect(() => {
    getDataReady();
}, [choses]); 

function handleCheck(option, checked){

if(checked) {setChoses(prevChoses => [...prevChoses, option]);}

else { 
    
    setChoses(choses.filter(item=> item!= option))}

}

function getDataReady(){
    var chosedOptions = []
    for(let item of choses)
    {
        chosedOptions.push(props.options.indexOf(item));

    } 
    chosedOptions.sort();
    props.onSelect(chosedOptions.join(","));
}

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

<form style={formStyle} >


{props.options.map((option) => { return < MultiChoiseOption onChecked={handleCheck} key={option} type="checkbox" option={option}></MultiChoiseOption>})}

</form>
    </> 
}