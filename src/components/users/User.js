//type rce
import React, { Component } from 'react'

export class User extends Component {

    componentDidMount() {
        // grab from path param login
        this.props.getUser(this.props.match.params.login);
    }
    render() {

        const { name, avatar_url, localtion, bio, blog, login, html_url, followers, following, public_repos, public_gist, hireable } = this.props.user;

        const { loading } = this.props;

        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User

