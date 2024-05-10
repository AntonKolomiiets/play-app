import { useState } from "react";
import "./TaskApp.css"

// Mock todo list
export default function TaskApp() {
  const [count, setCount] = useState([
    "new task",
    "old task",
    "Learn React",
    "Make To-do app",
  ]);

  return (
    <div className="TaskApp">
      <div className="ta_background">
        <div className="ta_buttons">
          <button>|||</button>
          <button>+</button>
        </div>
        <div className="main">
          <div>
            <table className="job">
              {count.map((item, index) => (
                <tr
                  key={index}
                  className={index === count.length - 1 ? "last-item" : ""}
                >
                  <td>{item}</td>
                  <td>
                    <button>Edit</button>
                    <button>Del</button>
                  </td>
                </tr>
              ))}
              {/* <tr>
              <td>
                <form>
                  <input
                    type="text"
                    style={{ background: "none", border: "none" }}
                  />
                </form>
              </td>
            </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
