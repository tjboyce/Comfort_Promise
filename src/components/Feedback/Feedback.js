import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import './Feedback.css'


const styles = theme => ({
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,

    },
    checked: {},
    
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});


class RadioButtons extends Component {
    state = {
        selectedValue: '',
        selectedValue2: '',
        selectedValue3: '',
        user: this.props.user.id,
       
    };

  
    handleSubmit = () => {
       console.log('handleSubmit', this.state);
       
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state })
        this.setState({
            selectedValue: '',
            selectedValue2: '',
            selectedValue3: '',
            user: this.props.user.id, 
        })
    }

    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
    };

    handleHelpful = event => {
        this.setState({ selectedValue2: event.target.value });
    };
    handleComments = event =>{
        this.setState({ selectedValue3: event.target.value });
    }

    render() {
        const { classes } = this.props;

        return (
            <Paper className={classes.root} elevation={4}>
            < div className = "feedbackDiv">
            <div>
          
                <h4>How well did the procedure go?</h4>
                <Radio
                    
                    checked={this.state.selectedValue === '1'}
                    onChange={this.handleChange}
                    value="1"
                    name="one"
                    aria-label="A"
                /> <span>1</span>
                <Radio
                    checked={this.state.selectedValue === '2'}
                    onChange={this.handleChange}
                    value="2"
                    name="two"
                    aria-label="B"
                /><span>2</span>
                <Radio
                    checked={this.state.selectedValue === '3'}
                    onChange={this.handleChange}
                    value="3"
                    name="three"
                    aria-label="C"
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                    }}
                /><span>3</span>
                <Radio
                    checked={this.state.selectedValue === '4'}
                    onChange={this.handleChange}
                    value="4"
                    color="default"
                    name="four"
                    aria-label="D"
                /><span>4</span>
                <Radio
                    checked={this.state.selectedValue === '5'}
                    onChange={this.handleChange}
                    value="5"
                    color="default"
                    name="five"
                    aria-label="E"
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                /><span>5</span>
            </div>
            <div>
                <h4>Were the resources provide helpful to you and the patient?</h4>
                    <Radio
                        checked={this.state.selectedValue2 === 'yes'}
                        onChange={this.handleHelpful}
                        value="yes"
                        color="default"
                        name="yes"
                        aria-label="E"
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    /><span>YES!</span>
                    <Radio
                        checked={this.state.selectedValue2 === 'no'}
                        onChange={this.handleHelpful}
                        value="no"
                        color="default"
                        name="no"
                        aria-label="E"
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    /><span>No</span>

            </div>
            <div>
                    <TextField
                        id="outlined-textarea"
                        label="Comments"
                        placeholder="Comments"
                        onChange= {this.handleComments}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />    

            </div>
                    <button onClick = {this.handleSubmit}>submit</button>
            </div>
            </Paper>
            
        );
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(
    connect(mapReduxStateToProps)(RadioButtons));
