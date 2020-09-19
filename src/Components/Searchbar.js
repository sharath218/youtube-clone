import React, { Component } from 'react'
import {Paper,TextField } from '@material-ui/core';

export default class Searchbar extends Component {
    state = {
        searchTerm: '',
    }
    handleChange = (event) =>{this.setState({searchTerm: event.target.value})} 
    handleSubmit = (event) => {
            //event.preventDefault();
            const {searchTerm} = this.state;
            const {onFormSubmit} = this.props;
            onFormSubmit(searchTerm);
            event.preventDefault();
    }
    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    
                    <TextField xs={8} fullWidth label="Search.." onChange={this.handleChange}>

                    </TextField>
                    
                  
                </form>
        </Paper>
        )
    }
}
