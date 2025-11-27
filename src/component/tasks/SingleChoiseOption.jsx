export default function SingleChoiseOption(props){
    return <>
    <input name="answer" type={props.type} id={props.option}  value={props.option}/>
    <label name="answer" htmlFor={props.option}>{props.option}</label><br/>
    </>}
