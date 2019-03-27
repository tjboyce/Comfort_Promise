import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Table from '@material-ui/core/Table';
// import TableHead from '@material-ui/core/TableHead';
// import { TableBody, TableRow, TableCell } from '@material-ui/core';
import Button from '@material-ui/core/Button'

class Admin2 extends Component{
componentDidMount (){
    this.props.dispatch ({type: 'FETCH_FEEDBACK'})
}
handleDeleteClick = id =>()=> {
    this.props.dispatch({type: 'DELETE_FEEDBACK', payload: id})
}
render () {
    return(
        <>
        <h1 id = "feedback">Feedback</h1>
        <div id='tbl-header'>
        <table cellpadding ="0" cellspacing = "0" border= "0">
            <thead>
             <th>Username</th>
                <th>Score</th>
                <th>Helpful</th>
                <th>Comments</th>
                <th>Delete</th>
            </thead>
            </table>    
            </div>
            
            <div id="tbl-content">
            <table>
            <tbody>
            {this.props.feedbackReducer.map((item) => (
               
                    <tr>
                        <td>{item.username}</td>
                        <td>{item.score}</td>
                        <td>{item.helpful}</td>
                        <td>{item.comments}</td>
                        <td><Button class="deleteButton" onClick={this.handleDeleteClick(item.feedback_id)}>Delete</Button>
                        </td>
                    </tr>
               
            ))}
             </tbody>
       </table>
        </div>
       </>
    )
}
}
const mapStateToProps = state =>({
    feedbackReducer: state.feedbackReducer, 
});
export default  connect(mapStateToProps)(Admin2);

