import Auth from "../../components/Auth/Auth";
import TableDiv from "../../components/TableDiv/TableDiv";
import TaskButton from "../../components/TaskButton/TaskButton";
import "./TaskApp.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Modal from "../../components/Modal/Modal";
import { useQuery } from "react-query";

const API = `http://localhost:3000/tasks/`;

// TodoApp
export default function TaskApp() {
  const [Tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const { isAuthenticated } = useAuth();

  const getData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found, please log in");
    }

    const response = await fetch(API, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json.tasks;
  };

  const { data, error, isLoading, isError, refetch } = useQuery(
    ["getData"],
    getData,
    {
      onError: (err) => {
        console.error("Fetching data failed:", err);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  const openModal = (mode, task = null) => {
    setMode(mode);
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const addTask = async (data) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found, please log in");
    }

    try {
      const response = await fetch(`${API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json);
      refetch(); // Refetch the data after adding a task
    } catch (err) {
      console.error("Adding task failed:", err);
      throw err; // Optional: rethrow if you want to handle it elsewhere
    }
  };

  const editTask = async (data, task) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found, please log in");
    }
    try {
      const response = await fetch(`${API}${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      console.log(task.id);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      refetch();
    } catch (err) {
      console.error("Edit taks has failed", err);
      throw err;
    }
  };

  const deleteTask = async (task_id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found, please log in");
    }
    try {
      const response = await fetch(`${API}${task_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`Deleting task with id: ${task_id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      console.log(json);
      refetch(); // Refetch the data after deleting a task
    } catch (err) {
      console.error("Deleting task failed:", err);
      throw err; // Optional: rethrow if you want to handle it elsewhere
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      {isAuthenticated && (
        <div>
          {isModalOpen && (
            <Modal
              mode={mode}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              task={currentTask}
              addTask={addTask}
              editTask={editTask}
            />
          )}
          <div className="TaskApp">
            <div className="ta_background">
              <div className="ta_buttons">
                <button>|||</button>
                <button onClick={() => openModal("create")}>+</button>
              </div>
              <div className="main">
                <div>
                  <table className="job">
                    <tbody>
                      {Tasks.map((item, index) => (
                        <tr
                          key={index}
                          className={
                            index === Tasks.length - 1 ? "last-item" : ""
                          }
                        >
                          <TableDiv key={item.id} task={item} />

                          <td>
                            <button onClick={() => openModal("edit", item)}>
                              Edit
                            </button>

                            <button onClick={() => deleteTask(item.id)}>
                              Del
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
