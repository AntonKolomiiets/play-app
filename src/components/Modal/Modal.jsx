import { useState } from "react";
import "./Modal.css";

const Modal = ({ mode, isOpen, onClose, task, addTask, editTask }) => {
  const editMode = mode === "edit";

  const [data, setData] = useState({
    title: editMode ? task.title : "",
    description: editMode ? task.description : "",
    due_date: editMode ? task.due_date : "",
    priority: editMode ? task.priority : 0,
    status: editMode ? task.status : 0,
  });

  // const handleAddTask = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedToken = jwt_decode(token);
  //     const user_id = decodedToken.user_id; // Assuming user_id is a field in your token
  //     addTask({
  //       title: data.title,
  //       status: "0",
  //       priority: "0",
  //     });
  //   } else {
  //     console.error("No token found, please log in");
  //   }
  // };

  const handleSave = (e) => {
    e.preventDefault();
    editMode ? editTask(data, task) : addTask(data);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(data);
  };

  return (
    <div className="m_body">
      <div className="m_modal">
        <button onClick={() => onClose()}>close</button>
        <h3>{mode}</h3>
        <form onSubmit={handleSave}>
          <input
            autoFocus
            required
            type="text"
            maxLength={15}
            placeholder="Task Title"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Task Description"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="due_date"
            value={data.due_date}
            onChange={handleChange}
          />
          <input
            type="number"
            name="priority"
            value={data.priority}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
