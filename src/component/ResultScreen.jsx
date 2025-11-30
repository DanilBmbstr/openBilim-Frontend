export default function ResultScreen(props) {



    const back = {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '40px',
        backgroundColor: '#FAFAFA',
        width: '95%',
        minHeight: '760px',
        alignItems: "center",
        justifyContent: "center",
        boxSizing: 'border-box', // Чтобы padding не увеличивал общую ширину

        overflow: 'auto', // Добавляем прокрутку если контент не помещается
        marginTop: '58px',

        padding: '20px', // Добавляем отступы
    };



    const content = {
        display: 'flex',
        flexDirection: 'row',

    }

    const textStyle = {
        fontSize: "80pt",
        textAlign: 'left'
    }

    var scoreStyle = null;
    var maxScoreStyle = null;
    if (props.score / props.maxScore > 0.75) {
        scoreStyle = {
            marginBottom: '5%',
            alignSelf: "flex-end",
            fontSize: "100pt",
            color: "#8BB884"
        }
            maxScoreStyle = {
  
            alignSelf: "flex-end",
            fontSize: "70pt",
            color: "#8BB884",
            marginBottom: "4%"
        }
    }
    else if (props.score/ props.maxScore > 0.5) {
        scoreStyle = {
            marginBottom: '5%',
            alignSelf: "flex-end",
            fontSize: "100pt",
            color: "#FFBD70"
        }
               maxScoreStyle = {

            alignSelf: "flex-end",
            fontSize: "70pt",
            color: "#FFBD70",
             marginBottom: "4%"
        }
    }
    else {
        scoreStyle = {
            marginBottom: '5%',
            alignSelf: "flex-end",
            fontSize: "100pt",
            color: "red"
        }
        maxScoreStyle = {

            alignSelf: "flex-end",
            fontSize: "70pt",
            color: "red",
            marginBottom: "4%"
        }
}

    const buttonStyle = {


        height: "100px",
        width: "20%",
        borderRadius: '50px',
        fontSize: "20pt"
    }

return <>
    <div style={back}>
        <div style={content}>

            <h1 style={textStyle}>Тест окончен <br /><br />  Результат:</h1>

            <h1 style={scoreStyle}>{props.score}</h1>
            <h1 style={maxScoreStyle}></h1>
            <h1 style={maxScoreStyle}> / {props.maxScore}</h1>
        </div>
    <button onClick = {props.onClick} style = {buttonStyle}> К списку тестов</button>
    </div>
</>
}