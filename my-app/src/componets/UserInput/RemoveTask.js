const RemoveTask = (props) => {

    const taskInfoHandler = () => {
        console.log(props.currentTask)
    }
    return(
        <div>
            <input  onClick={taskInfoHandler} className={"todo"} type="checkbox" id={"is_done"}/>
        </div>
    );
}
export default RemoveTask;