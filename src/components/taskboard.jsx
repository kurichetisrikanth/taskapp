import React, { Component } from 'react';
import './taskboard.css';
import Table from './common/table';
import Input from './common/input';

class TaskBoard extends Component {
    state = { 
        tasks :[],
        taskId: '',
        taskDate:''
    }

    handleSubmit = () =>{
        let task = {
            id : this.state.taskId,
            date : this.state.taskDate 
        };
        const tasks = this.state.tasks;
        tasks.push(task);
        this.setState({tasks});
        console.log(this.state.tasks);
        this.setState({taskId: ''});
        this.setState({taskDate: ''});
    }
    handleTaskIdChange = (eventObj) =>{
        //console.log(eventObj.target.value);
        this.setState({taskId: eventObj.target.value});
    }
    handleTaskDateSelect = (eventObj) =>{
        //console.log(eventObj.target.value);
        this.setState({taskDate: eventObj.target.value});
    }
    handleReset = () =>{
        this.setState({ 
            tasks :[],
            taskId: '',
            taskDate:''
        });
    }
    render() { 
        return ( 
            <div>
                <Input 
                    taskId = {this.state.taskId}
                    taskDate = {this.state.taskDate}
                    onTaskIdChange = {this.handleTaskIdChange}
                    onTaskDateChange = {this.handleTaskDateSelect}
                    onSubmit = {this.handleSubmit}
                    onReset = {this.handleReset}/>
                <Table
                    data = {this.state.tasks}
                />
            </div>
        );
    }
}
 
export default TaskBoard;