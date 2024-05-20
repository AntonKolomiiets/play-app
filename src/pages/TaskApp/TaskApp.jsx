import Auth from "../../components/Auth/Auth";
import TableDiv from "../../components/TableDiv/TableDiv";
import TaskButton from "../../components/TaskButton/TaskButton";
import "./TaskApp.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const API = `http://localhost:3000/tasks`;

// Mock todo list
export default function TaskApp() {
  const [Tasks, setTasks] = useState([]);

  const { isAuthenticated } = useAuth();

  // const authToken = false;
  // ["new task", "old task", "Learn React", "Make To-do app"];

  const getData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, please log in");
      return;
    }
    try {
      const responce = await fetch(API, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await responce.json();
      setTasks(json.tasks);
    } catch (err) {
      console.error(err);
    }
  };

  const addTask = async (data) => {
    try {
      const responce = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await responce.json();
      console.log(json);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isAuthenticated && (
        <div>
          <div className="TaskApp">
            <div className="ta_background">
              <div className="ta_buttons">
                <button>|||</button>
                <button
                  onClick={() =>
                    addTask({
                      user_id: 1,
                      title: "Task from React",
                      status: "0",
                      priority: "0",
                    })
                  }
                >
                  +
                </button>
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
                            {/* pass id to each button */}
                            <TaskButton
                              key={item.id}
                              id={item.id}
                              addTask={addTask}
                              task={item}
                            />
                            <button>Edit</button>
                            <button>Del</button>
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
