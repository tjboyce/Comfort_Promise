import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './SelectAge.css'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SelectAge extends Component {

    state = {
        selection: '',
        labelWidth: 100,
        age: '',
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'FETCH_INFO' })
    }

    handleChange = (event) => {
        console.log('event value', event.target.value);

        this.setState({
            selection: event.target.value,
        })
    }



    render() {
        console.log('TONY', this.state.selection)
        const { classes } = this.props;



        return (
            <>
                <div className="selectDiv">
                    <h2>What age child are you working with? </h2>
                    <form>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel
                                ref={ref => {
                                    this.InputLabelRef = ref;
                                }}
                                htmlFor="outlined-age-simple"
                            >
                                age
          </InputLabel>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                input={
                                    <OutlinedInput
                                        labelWidth={this.state.labelWidth}
                                        name="age"
                                        id="outlined-age-simple"
                                    />
                                }
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Infant 0-12 months</MenuItem>
                                <MenuItem value={2}>Toddler</MenuItem>
                                <MenuItem value={3}>School Age</MenuItem>
                                <MenuItem value={4}>Teens</MenuItem>
                            </Select>
                        </FormControl>

                    </form >
                </div>




                {/* <div className = "selectDiv">
                <h2>What age child are you working with? </h2>
                <select onChange = {this.handleChange}>
                    <option value=''>Select Age Group Here</option>
                    <option  value="1" className = "infant">Infant</option>
                    <option value="2" className="toddler">Toddler</option>
                    <option value="3" className="schoolAge">School Age</option>
                    <option  value="4" className="teens">Teens</option>
                </select>
      */}
                <div>
                    {this.props.projectReducer.filter(item => item.id === Number(this.state.selection)).map(item =>
                        <>
                            <div className="infoDiv"><h3>{item.age_group}</h3>

                                <iframe className="videoDiv" key={item.id} src={item.video} title="infant video" />
                                <ul>
                                    <li>{item.resource1}</li>
                                    <li>{item.resource2}</li>
                                    <li>{item.resource3}</li>
                                    <li>{item.resource4}</li>
                                    <li>{item.resource5}</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>


                {/* </div> */}
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default withStyles(styles)(connect(mapReduxStateToProps)(SelectAge));
