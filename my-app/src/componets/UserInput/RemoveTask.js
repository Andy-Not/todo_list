const RemoveTask = (props) => {

    const taskInfoHandler = () => {
        props.remover(props.currentTask)
    }
    return(<input  onClick={taskInfoHandler} className={"todo"} type="checkbox" id={"is_done"}/>);
}
export default RemoveTask;