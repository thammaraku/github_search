import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

class App extends Component {

  state = {
    users: [],
    loading: false, // to use for showing loading progress
  }


  // we no longer need after add searchUser
  // async componentDidMount() {

  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   console.log(res.data);

  //   this.setState({ users: res.data, loading: false })

  // };

  // Search for a github user
  searchUsers = async text => {
    console.log(text);

    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(res.data);

    this.setState({ users: res.data.items, loading: false })
    
  }

  // Clear users from state
  clearUsers = () => this.setState({ users:[], loading: false });

  render() {
    // const numbers = [1,2,3];

    const { users, loading } = this.state;
    return (
      <div className='App'>
        {/* <Navbar title="Github Finder" icon="fab fa-github"/> */}
        <Navbar />
        <div className='container'>
          {/* <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ this.state.users.length > 0 ? true : false }/> */}
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false }/>
          {/* <UserItem /> */}
          {/* pass loading and users as props*/}
          {/* <Users loading={this.state.loading} users={this.state.users} /> */}
          <Users loading={loading} users={users} />
          {/* <Navbar title={numbers} /> */}
        </div>
      </div>
    );
  }
}

export default App;
