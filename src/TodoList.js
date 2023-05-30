import React, {useState} from 'react';


const TodoList = () => {
    const [tasks,setTasks] =useState([]);
    const [newtask, addnewtask] =useState([]);

    const addTask = ()=>{
        if(newtask.trim() !==''){
        setTasks([...tasks,newtask]);
        addnewtask('');
        }
    };
    const handelinputChnage = (event)=>{
        addnewtask(event.target.value);
    }
    const removeTask = (index) => {
        console.log(tasks);
        const updatedTask = [...tasks];
        updatedTask.splice(index,1);
        console.log(updatedTask);
        setTasks(updatedTask);
    };
    return(
        <div>
            <h1>Todo List App</h1>
            <ul>
                {
                    tasks.map((task,index)=>(
                        <li key={index}>{task}
                        <button onClick={()=>removeTask(index)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                <input
                type='text'
                value={newtask}
                onChange={handelinputChnage}
                ></input>
                <button onClick={addTask}>Add</button>
            </div>
        </div>
    )
}

export default TodoList;
