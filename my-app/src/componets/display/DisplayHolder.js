const DisplayHolder = () => {
    return(
        <div className={"wrapper"} >
            <div className={"content"}>
                CURRENT DAY
            </div>
            <div className={"tasks_holder"}>
                <div className={"task"}>
                    <div className="title_wrapper">
                        <div className="task_title">Task: Take dog out</div>
                    </div>
                    <div className={"input_wrapper"}>
                        <div className="due_date">Due: jan-1-2021</div>
                        <input className={"todo"} type="checkbox" id={"is_done"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DisplayHolder;