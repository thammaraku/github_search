//type rce
import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Search extends Component {

    state = {
        text: ""
    };

    static propTypes = {
        // type ptfr
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    };

    // incase we have multiple input so use this so you don't need to have onChange for every field
    // since there's only one line you don't need curly brace
    // onChange = (e) => this.setState({ text: e.target.value });
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    
    // without arrow function you will need to bind this on the form tag
    // onSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state.text);
    // }

    onSubmit = e => {
        e.preventDefault();

        // 20 Alert
        if(this.state.text === "") {
            this.props.setAlert("Please enter something", "light")
        } else {
            console.log(this.state.text);
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });

        }

    }

    render() {

        const { showClear, clearUsers } = this.props;
        return (
            <div>
            {/* // <form onSubmit={this.onSubmit.bind(this)} className="form">
            // if use arrow function on onSubmit don't need to bind */}
            <form onSubmit={this.onSubmit} className="form">
                
                <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />

            </form>

            {/* {this.props.showClear && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>} */}
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
           
            </div>
        )
    }
}

export default Search
