import './taskStyle.css';

export default function TextTask(props) {
    return <>
        <p className={"taskText"}>{props.taskText}</p>
        <textarea onChange={(event) => { props.onType(event.target.value) }}></textarea>
    </>
}