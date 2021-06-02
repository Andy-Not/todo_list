import Task from "./Task";

const DisplayHolder = (props) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];
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