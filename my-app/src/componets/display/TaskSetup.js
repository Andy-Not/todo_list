import RemoveTask from "../UserInput/RemoveTask";


const TaskSetup = (props) => {
    let x = true;
    return(
             <div  key={props.task.id} className={"task"}>
                 <div className="title_wrapper">
                     <div className="task_title">Task: {props.task.title}</div>
                 </div>
                 <div className={"input_wrapper"}>
                     <div className="due_date">Due: {props.task.due}</div>
                     {x&&<div className="due_time">{props.task.time}</div>}
                     <RemoveTask remover={props.remover} currentTask={props.task.id}/>
                 </div>
             </div>
    );
}
export default TaskSetup;