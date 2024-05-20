import "./TableDiv.css"

const TableDiv = ({ task }) => {
    return (
        <td className="td-main">{task.title}</td>
    )
};

export default TableDiv;