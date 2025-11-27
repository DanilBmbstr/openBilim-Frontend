import { Children, useState } from "react"

export default function MultiChoiseOption(props){

    function onChecked (checked){
props.onChecked(props.option, checked)
    }

    return <>
    <input onChange={(event)=>{onChecked(event.target.checked)}} name="answer" type={props.type} id={props.option}  value={props.option}/>
    <label name="answer" htmlFor={props.option}>{props.option}</label><br/>

    </>}
