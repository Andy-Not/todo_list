const Task = (props) => {
    return(
    <div className={"tasks_holder"}>
        {props.taskInfo.map((task) => (
            <div className={"task"}>
                <div className="title_wrapper">
                    <div className="task_title">Task: {task.title}</div>
                </div>
                <div className={"input_wrapper"}>
                    <div className="due_date">Due: {task.due}</div>
                    <input className={"todo"} type="checkbox" id={"is_done"}/>
                </div>
            </div>
        ))}

    </div>)
}
export default Task;