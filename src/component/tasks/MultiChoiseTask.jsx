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



    return <>
    

    <p className="taskText">{props.taskText}</p>

<form className="form" >


{props.options.map((option) => { return < MultiChoiseOption onChecked={handleCheck} key={option} type="checkbox" option={option}></MultiChoiseOption>})}

</form>
    </> 
}