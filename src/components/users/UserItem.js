// once convert to function will not need component
// import React, { Component } from "react";
import React from "react";

import PropTypes from "prop-types";

//22 Single User
import { Link } from 'react-router-dom';

// this is stateless so we should convert to functional component
// Change to function ES6 and remove render since it's now functoin which will have only return
// this will no longer need and need to pass props

// destructing items out from user
const UserItem = ({ user: { login, avatar_url, html_url } }) => {

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          {/* 22 Single User */}
          {/* <a href={html_url} className='btn btn-dark btn-sm my-1'> */}
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
            More
          </Link>
        </div>
      </div>
    );
};

// since it's required to pass user props into this function
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

// Previously used class

// class UserItem extends Component {

  // render() {
    // const { login, avatar_url, html_url } = this.state;
//     const { login, avatar_url, html_url } = this.props.user;
//     return (
//       <div className='card text-center'>
//         <img
//           src={avatar_url}
//           alt=''
//           className='round-img'
//           style={{ width: "60px" }}
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className='btn btn-dark btn-sm my-1'>
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }


export default UserItem;
