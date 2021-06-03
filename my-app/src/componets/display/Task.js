import RemoveTask from "../UserInput/RemoveTask";

const Task = (props) => {
    let x = true;
    return(
    <div key={props.taskInfo.id} className={"tasks_holder"}>
        {props.taskInfo.map((task) => (
            <div className={"task"}>
                <div className="title_wrapper">
                    <div className="task_title">Task: {task.title}</div>
                </div>
                <div className={"input_wrapper"}>
                    <div className="due_date">Due: {task.due}</div>
                    {x&&<div className="due_time">{task.time}</div>}
                    <RemoveTask currentTask={task.id}/>
                </div>
            </div>
        ))}

    </div>)
}
export default Task;