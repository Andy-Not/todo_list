import Task from "./Task";

const DisplayHolder = (props) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date();
    let dayName = days[d.getDay()];
    return(
        <div className={"wrapper"} >
            <div className={"content"}>
                {dayName}
            </div>
            <Task taskInfo={props.taskInfo}/>
        </div>
    );
}
export default DisplayHolder;