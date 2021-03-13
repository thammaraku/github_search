// once convert to function will not need component
// import React, { Component } from "react";
import React from "react";

import PropTypes from "prop-types";

// this is stateless so we should convert to functional component
// Change to function ES6 and remove render since it's now functoin which will have only return
// this will no longer need and need to pass props

// destructing items out from props
const Navbar = ({ icon, title}) => {

    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </nav>
    );
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// since it's required to pass title and icon props into this function
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};


// Previously used class

// export class Navbar extends Component {
//   static defaultProps = {
//     title: "Github Finder",
//     icon: "fab fa-github",
//   };

//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     icon: PropTypes.string.isRequired,
//   };

//   render() {
//     return (
//       <nav className='navbar bg-primary'>
//         <h1>
//           <i className={this.props.icon}></i> {this.props.title}
//         </h1>
//       </nav>
//     );
//   }
// }


export default Navbar;
