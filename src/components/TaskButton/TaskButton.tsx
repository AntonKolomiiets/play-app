

const TaskButton = ({id, addTask, task}) => {
    const handleClick = () => {
        const newTask = {
          user_id: 1,
          title: "Task from React",
          status: "0",
          priority: "0"
        };
        addTask(newTask);
    };


    return <button onClick={handleClick}>{id}</button>;
};

export default TaskButton;