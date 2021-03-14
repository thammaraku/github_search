import React, { Fragment, Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";

//21 Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";

class App extends Component {

  state = {
    users: [],
    loading: false, // to use for showing loading progress
    alert: null
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
    
  };

  // Clear users from state
  clearUsers = () => this.setState({ users:[], loading: false });

  // 20 Alert
  setAlert = (msg, type) => {
    this.setState( { alert: { msg: msg, type: type } });
    // set time to alert to disappear after 5 seconds
    setTimeout(() => this.setState({ alert:null }), 5000);
  };

  render() {
    // const numbers = [1,2,3];

    const { users, loading } = this.state;
    return (
      //21 React Router Add
      <Router>
        <div className='App'>
          {/* <Navbar title="Github Finder" icon="fab fa-github"/> */}
          <Navbar />
          <div className='container'>

            <Alert alert={this.state.alert} />
            {/* 21 Router add switch to add an extra page */}
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={ users.length > 0 ? true : false }
                    setAlert={this.setAlert}
                  />
                  {/* <UserItem /> */}
                  {/* pass loading and users as props*/}
                  {/* <Users loading={this.state.loading} users={this.state.users} /> */}
                  <Users loading={loading} users={users} />
                  {/* <Navbar title={numbers} /> */}
                  {/* <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ this.state.users.length > 0 ? true : false }/> */}
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}

export default App;
