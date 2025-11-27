import Logo from './../assets/Logo.svg'
import React, { useState } from 'react';
import { useEffect } from 'react';
import TestChoise from './TestChoise';
import TextTask from './tasks/TextTask';
import SingleChoiseTask from './tasks/SingleChoiseTask';
import MultiChoiseTask from './tasks/MultiChoiseTask';
var testsLoaded = false;
export default function Testing(props) {

    const [task, setTask] = useState(null);

    const xhr = new XMLHttpRequest();
    const [answer, setAnswer] = useState(null);
    useEffect(() => {
        getTask();

    }, []); // Пустой массив зависимостей - выполнится только при монтировании

    function getTask() {
        xhr.open('GET', props.url + '/' + props.sessionId + '/getTask');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                setTask((xhr.responseText))
            }
        }
        xhr.send();
    }

    const back = {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '40px',
        backgroundColor: '#FAFAFA',
        width: '95%',
        minHeight: '760px',

        boxSizing: 'border-box', // Чтобы padding не увеличивал общую ширину

        overflow: 'auto', // Добавляем прокрутку если контент не помещается
        marginTop: '58px',

                padding: '20px', // Добавляем отступы
    };



    const textStyle = {
        marginBottom: '0px',
    }

    const buttonStyle = {
        width: '300px',
        height: '70px',
        borderRadius: '20px',
        fontSize: '20pt',
        alignSelf:'flex-end'
    }

    const taskBlock ={
         display: 'flex',
        flexDirection: 'column',


        alignItems: 'flex-start',
        width: '80%',



    }

    function sendAnswer(){

            if(JSON.parse(task).type == "Text") {xhr.open('POST', props.url + '/' + props.sessionId + '/textAns/ans');}
            if(JSON.parse(task).type == "SingleChoise") {xhr.open('POST', props.url + '/' + props.sessionId + '/singleChoise/ans');}
            if(JSON.parse(task).type == "MultipleChoise") {xhr.open('POST', props.url + '/' + props.sessionId + '/multiChoise/ans');}
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                getTask()
            }
        }
        xhr.send(JSON.stringify(
            {
                "user_token": props.token,
                "answer":answer
            }
        ));
        
    }

    if (task == null) { return <>Загрузка</> }


if(JSON.parse(task).type == "Text")
{
    return (
        <div style={back}>
            <div style={taskBlock}>


                <TextTask onType={setAnswer} taskText={JSON.parse(task).taskText}></TextTask>

            </div>

            <button style={buttonStyle} onClick={sendAnswer}>Далее</button>
        </div>
    )}
else if(JSON.parse(task).type == "SingleChoise")
{
        return (
        <div style={back}>
            <div style={taskBlock}>


                <SingleChoiseTask onSelect={setAnswer} options ={JSON.parse(task).options} taskText={JSON.parse(task).taskText}></SingleChoiseTask>

            </div>

            <button style={buttonStyle} onClick={sendAnswer}>Далее</button>
        </div>
    )}
    else if(JSON.parse(task).type == "MultipleChoise")
{
        return (
        <div style={back}>
            <div style={taskBlock}>

                <MultiChoiseTask onSelect={setAnswer} options ={JSON.parse(task).options} taskText={JSON.parse(task).taskText}></MultiChoiseTask>

            </div>

            <button style={buttonStyle} onClick={sendAnswer}>Далее</button>
        </div>
    )};

}
