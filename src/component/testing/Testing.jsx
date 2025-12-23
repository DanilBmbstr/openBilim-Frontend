
import React, { useState } from 'react';
import { useEffect } from 'react';
import TestChoise from '../TestChoise';
import TextTask from '../tasks/TextTask';
import SingleChoiseTask from '../tasks/SingleChoiseTask';
import MultiChoiseTask from '../tasks/MultiChoiseTask';
import ResultScreen from '../ResultScreen';
import "./testing.css"
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom';

var testsLoaded = false;


export default function Testing(props) {
    const navigate = useNavigate()
    const [task, setTask] = useState(null);

    const xhr = new XMLHttpRequest();
    const [answer, setAnswer] = useState(null);
    useEffect(() => {
        getTask();

    }, []);

    function getTask() {
        xhr.open('GET', props.url + '/' + props.sessionId + '/getTask');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                setTask((xhr.responseText))
            }
            else{navigate("/auth")}
        }
        xhr.send();
    }


    function sendAnswer() {

        if (JSON.parse(task).type == "Text") { xhr.open('POST', props.url + '/' + props.sessionId + '/textAns/ans'); }
        if (JSON.parse(task).type == "SingleChoise") { xhr.open('POST', props.url + '/' + props.sessionId + '/singleChoise/ans'); }
        if (JSON.parse(task).type == "MultipleChoise") { xhr.open('POST', props.url + '/' + props.sessionId + '/multiChoise/ans'); }
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function () {
            if (xhr.status === 200) {
                getTask()
            }
        }
        xhr.send(JSON.stringify(
            {
                "user_token": props.token,
                "answer": answer
            }
        ));

    }

    if (task == null) { return <>Загрузка</> }




    var taskType = JSON.parse(task).type



    return (
        <div className={"back"}>
            <div className={"taskBlock"}>
                {taskType == "Text" ? <TextTask onType={setAnswer} taskText={JSON.parse(task).taskText}></TextTask>
                    : taskType == "SingleChoise" ? <SingleChoiseTask onSelect={setAnswer} options={JSON.parse(task).options} taskText={JSON.parse(task).taskText}></SingleChoiseTask> :
                        taskType == "MultipleChoise" ? <MultiChoiseTask onSelect={setAnswer} options={JSON.parse(task).options} taskText={JSON.parse(task).taskText}></MultiChoiseTask> :
                            taskType == "result" ? <ResultScreen onClick={()=>{props.toMainPage(navigate)}} maxScore={JSON.parse(task).maxScore} score={JSON.parse(task).score}></ResultScreen> :
                                <><p>Unexpected task type</p></>
                }

            </div>
                {taskType != "result"? <button className="submit" onClick={sendAnswer}>Далее</button> : <></>}
            
        </div>
    )



}
