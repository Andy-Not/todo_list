import RemoveTask from "../UserInput/RemoveTask";

const Task = (props) => {
    let x = true;
    return(
    <div className={"tasks_holder"}>
        {props.taskInfo.map((task) => (
            <div key={props.taskInfo.id} className={"task"}>
                <div className="title_wrapper">
                    <div className="task_title">Task: {task.title}</div>
                </div>
                <div className={"input_wrapper"}>
                    <div className="due_date">Due: {task.due}</div>
                    {x&&<div className="due_time">{task.time}</div>}
                    <RemoveTask remover={props.remover} currentTask={task.id}/>
                </div>
            </div>
        ))}

    </div>)
}
export default Task;