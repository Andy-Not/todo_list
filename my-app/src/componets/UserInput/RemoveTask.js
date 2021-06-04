const RemoveTask = (props) => {

    const taskInfoHandler = () => {
        props.remover(props.currentTask)
    }
    return(
        <div>
            <input  onClick={taskInfoHandler} className={"todo"} type="checkbox" id={"is_done"}/>
        </div>
    );
}
export default RemoveTask;