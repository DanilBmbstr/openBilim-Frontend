export default function TestChoise(props){
    const divStyle = {
        marginTop: "1%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginLeft: "20%",
        height: "auto", // ← Измените на auto
        textAlign: "left",
    }

    const names = {
        display: "flex", 
        flexDirection: "column",
    }

    const name = {
        fontSize: "20pt",
        margin: 0, // ← Добавьте
    }

    const subject = {
        marginTop: "0%",
        fontSize: "15pt",
        margin: 0, // ← Добавьте
    }

    const buttonStyle = {
        alignSelf: "flex-start", // ← Выровнять кнопку по верху
        marginLeft: "20px",
        height: "100%",
        width: "20%",
        borderRadius: '20px',
        fontSize: "20pt"
    }


    function startTest(){
        props.onClick(props.testId);
    }

    return <>
        <div style={divStyle}>
            <div style={names}>
                <p style={name}>{props.name}</p>
                <p style={subject}>{props.subject}</p>
            </div>
            <button onClick = {startTest} style={buttonStyle}>Начать</button>
        </div>
    </>
}