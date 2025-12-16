import { useState } from "react"
import SingleChoiseOption from "./SingleChoiseOption"

export default function SingleChoiseTask(props) {
    return <>
        <p className="taskText">{props.taskText}</p>
        <form className="form" onChange={(event) => { props.onSelect(props.options.indexOf(event.target.value)) }}>

            {props.options.map((option) => { return < SingleChoiseOption type={"radio"} key={option} option={option}></SingleChoiseOption> })}

        </form>
    </>
}