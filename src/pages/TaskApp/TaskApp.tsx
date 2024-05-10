import "./TaskApp.css";

// Mock todo list
export default function TaskApp() {
  const Tasks = ["new task", "old task", "Learn React", "Make To-do app"];

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
              {Tasks.map((item, index) => (
                <tr
                  key={index}
                  className={index === Tasks.length - 1 ? "last-item" : ""}
                >
                  <td>{item}</td>
                  <td>
                    <button>Edit</button>
                    <button>Del</button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
