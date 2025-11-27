export default function TextTask(props){

    const textBoxStyle ={
        resize: "none",
        width: "70%",

        height: "600px",
        borderRadius: "0.5%",
        fontSize: "20pt",
        fontFamily: "'MainFont', sans-serif"
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
 <textarea onChange={(event)=> {props.onType(event.target.value)}}style={textBoxStyle}></textarea>
    </> 
}