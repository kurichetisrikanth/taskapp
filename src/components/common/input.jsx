import React from 'react';
const Input = (props) => {
    const isEnabled = props.taskId.length > 0 && props.taskDate.length > 0;
    return ( 
        <div className = "centered">
            <p className="h4 mb-4">Add tasks</p>
            <div className="form-group">
                <label htmlFor="taskId">Task ID</label>
                <input 
                    value = {props.taskId}
                    onChange={(eveObj) => props.onTaskIdChange(eveObj)}
                    type="textbox" 
                    className="form-control" 
                    id="taskId"/>
            </div>
            <div className="form-group">
                <label >Date of task</label>
                <input 
                    value = {props.taskDate}
                    onChange = {(eveObj) => props.onTaskDateChange(eveObj)}
                    type="date" 
                    name="taskDate" 
                    className="form-control"/>
            </div>
            
            <div className="row">
                <div className="col">
                    <button 
                        disabled={!isEnabled}
                        onClick = {props.onSubmit}
                        className="btn btn-primary form-control  btn-block">
                            Submit
                    </button>
                </div>
                <div className="col">
                    <button 
                        onClick = {props.onReset}
                        className="btn btn-primary form-control  btn-block">
                            Reset
                    </button>
                </div>
            </div>  
        </div>
     );
}
 
export default Input;