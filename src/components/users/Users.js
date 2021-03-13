// import React, { Component } from 'react';
import React from 'react';
import UserItem from "./UserItem"
import Spinner from "../layout/Spinner"
// type impt
import PropTypes from 'prop-types'


const Users = ({ users, loading }) => {

    if(loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    // <div key={user.id}>{user.login}</div>
                    <UserItem key={user.id} user={user} />
                ))}    
            </div>
        )
    }

}


Users.propTypes = {
    // type ptar
    users: PropTypes.array.isRequired,
    // type ptbr
    loading: PropTypes.bool.isRequired,
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem"
}
export default Users

// export class Users extends Component {

//     render() {
//         return (
//             <div style={userStyle}>
//                 {this.props.users.map(user => (
//                     // <div key={user.id}>{user.login}</div>
//                     <UserItem key={user.id} user={user} />
//                 ))}    
//             </div>
//         )
//     }
// }

// const userStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gridGap: "1rem"
// }
// export default Users

// state = {
    //     users: [
    //         {
    //             id: "1",
    //             login: "octocat1",
    //             avatar_url:
    //               "https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    //             html_url: "https://github.com/octocat"
    //         },
    //         {
    //             id: "2",
    //             login: "octocat2",
    //             avatar_url:
    //               "https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    //             html_url: "https://github.com/octocat"
    //         },
    //         {
    //             id: "3",
    //             login: "octocat3",
    //             avatar_url:
    //               "https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    //             html_url: "https://github.com/octocat"
    //         },
    //         {
    //             id: "4",
    //             login: "octocat4",
    //             avatar_url:
    //               "https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    //             html_url: "https://github.com/octocat"
    //         },
    //         {
    //             id: "5",
    //             login: "octocat5",
    //             avatar_url:
    //               "https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    //             html_url: "https://github.com/octocat"
    //         },
    //         {
    //             id: "6",
    //             login: "octocat6",
    //             avatar_url:
    //               "https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4",
    //             html_url: "https://github.com/octocat"
    //         },
        
    //     ]
    // }