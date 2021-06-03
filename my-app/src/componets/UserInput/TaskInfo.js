import React, {useState} from "react";

const TaskInfo = () => {

   const [time,setTime] = useState();
   const submitHandler = () => {

   }

   const timeHandler = (event) => {

       let timeSelected = event.target.value.substring(0,2)

       if (+timeSelected >= 12){
           setTime(event.target.value + " PM")
       } else {
           setTime(event.target.value + " AM")
       }

   }
   console.log(time);
    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="task">Task</label>
            <input id={"task"} type="text"/>
            <label htmlFor="date"> date and time</label>
            <input type="date"/>
            <input onSelect={timeHandler} type="time" name="time" placeholder="hrs:mins" pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" class="inputs time"/>
            <button type={"submit"}>Add task</button>
        </form>
    );
}
export default TaskInfo;