tableFormat.jsx:

function TableFormat()
{
    const formatInputs=[{task:"",status:""}]
    const StudentTable = (tasks,index) => {
        return(
            <tr key={index}>
                <td>{tasks.task}</td>
                <td>{tasks.status}</td>
            </tr>
        )
    }
    return(
        <div>
            <table>
                <thead>
                    <th>Task</th>
                    <th>status</th>
                </thead>
                <tbody>
                    {formatInputs.map(StudentTable)}
                </tbody>
            </table>
        </div>
    )
}
export default TableFormat