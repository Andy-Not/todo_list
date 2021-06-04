import React, {useState} from "react";

const TaskInfo = (props) => {

   const [time,setTime] = useState();
   const [date, setDate] = useState();
   const [title, setTitle] = useState("");

   const submitHandler = (event) => {
       event.preventDefault();
         const newTask = {
             title: title,
             due: date,
             time: time,
             id: Math.random()
         }
         props.addTask(newTask)
         setTitle("")
   }

   const timeHandler = (event) => {

       let timeSelected = event.target.value.substring(0,2)

       if (+timeSelected >= 12){
           setTime(event.target.value + " PM")
       } else {
           setTime(event.target.value + " AM")
       }

   }

   const dateHandler = (event) => {
       const xdate = new Date(event.target.value)
        setDate(`${xdate.getMonth()+1}/${xdate.getDate()+1}/${xdate.getFullYear()}`)
   }

   const titleHandler = (event) => {
        setTitle(event.target.value);
   }

    return(
        <form onSubmit={submitHandler}>
            <div className="form_task_title">
                <label htmlFor="task">Task</label>
                <input onChange={titleHandler} id={"task"} type="text" value={title}/>
            </div>
            <label htmlFor="date"> date and time</label>
            <input onSelect={dateHandler} type="date"/>
            <input onSelect={timeHandler} type="time" name="time" placeholder="hrs:mins" pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" class="inputs time"/>
            <button type={"submit"}>Add task</button>
        </form>
    );
}
export default TaskInfo;