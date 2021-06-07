import React, {useRef} from "react";

const TaskInfo = (props) => {

    const timeInputRef = useRef();
    const dateInputRef = useRef();
    const titleInputRef = useRef();

   const submitHandler = (event) => {

       event.preventDefault(event);

       const date = new Date(dateInputRef.current.value)

       let timeSelected = timeInputRef.current.value.substring(0,2)

       let time = null;

       if (+timeSelected >= 12){
           time = `${timeInputRef.current.value} PM`;
       } else if (+timeSelected) {
           time = `${timeInputRef.current.value} AM`;
       }

         const newTask = {
             title: titleInputRef.current.value,
             due: `${date.getMonth()+1}/${date.getDate()+1}/${date.getFullYear()}`,
             time: time,
             id: Math.random()
         }

         props.addTask(newTask)
       titleInputRef.current.value = ""

   }

    return(
        <form onSubmit={submitHandler}>
            <div className="form_task_title">
                <label htmlFor="task">Task</label>
                <input id={"task"} type="text" ref={titleInputRef}/>
            </div>
            <label htmlFor="date"> date and time</label>
            <input  type="date" ref={dateInputRef}/>
            <input  type="time" name="time" placeholder="hrs:mins" pattern="^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$" class="inputs time" ref={timeInputRef}/>
            <button type={"submit"}>Add task</button>
        </form>
    );
}
export default TaskInfo;