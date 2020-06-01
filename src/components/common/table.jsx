import React from 'react';
const Table = (props) => {
    let data = props.data;
    let rowData = data.map((task,index)=>{
        return (
            <tr key={task.id}>
                <th scope="row">{index+1}</th>
                <td>{task.date}</td>
                <td>{task.id}</td>
            </tr>
        )
    })
    if(data.length === 0)
        return null;
    return ( 
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Task ID</th>
                </tr>
            </thead>
            <tbody>
                {rowData}
            </tbody>
        </table>
     );
}
 
export default Table;