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
        <h3>{mode} task</h3>
        <form onSubmit={handleSave}>
          <div className="m_title_div" id="m_1">
            <label for="title">Title:</label>
            <input
              autoFocus
              required
              type="text"
              maxLength={15}
              placeholder="Task Title"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="m_title_div" id="m_2">
            <label for="description">Discription:</label>
            <textarea
              type="text"
              placeholder="Task Description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <div className="m_title_div" id="m_3">
            <label for="due_date">Complete until: </label>
            <input
              type="date"
              name="due_date"
              value={data.due_date}
              onChange={handleChange}
            />
          </div>
          <div className="m_priority_div">
            <label for="priority">Priority: {data.priority}</label>
            <input
              type="range"
              min="0"
              max="3"
              name="priority"
              className="m_priority_slider"
              value={data.priority}
              onChange={handleChange}
            />
          </div>
        <div className="m_buttons">
          <button type="submit">Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
