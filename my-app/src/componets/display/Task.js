import RemoveTask from "../UserInput/RemoveTask";
import TaskInfo from "../UserInput/TaskInfo";
import TaskSetup from "./TaskSetup";

const Task = (props) => {
    return(
    <div className={"tasks_holder"}>
        {props.taskInfo.map((task) => (
            <TaskSetup remover={props.remover} task={task}/>
        ))
        }
    </div>)
}
export default Task;