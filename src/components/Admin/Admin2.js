import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { TableBody, TableRow, TableCell } from '@material-ui/core';
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
        <Table>
            <TableHead className='table'>
                <th>Username</th>
                <th>Score</th>
                <th>Helpful</th>
                <th>Comments</th>
            </TableHead>
            {this.props.feedbackReducer.map((item) => (
                <TableBody>
                    <TableRow>
                        <TableCell>{item.username}</TableCell>
                        <TableCell>{item.score}</TableCell>
                        <TableCell>{item.helpful}</TableCell>
                        <TableCell>{item.comments}</TableCell>
                        <TableCell><Button class="deleteButton" onClick={this.handleDeleteClick(item.feedback_id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            ))}
        </Table>
    )
}
}
const mapStateToProps = state =>({
    feedbackReducer: state.feedbackReducer, 
});

export default connect(mapStateToProps)(Admin2);

