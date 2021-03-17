//type rce
import React, { Fragment, useEffect } from 'react'
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

import Repos from "../repos/Repos"

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // to fix dependencies issue when using useEffect with 2nd argument blank array add eslint
        // eslint-disable-next-line
    }, []);

    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <Link to="/" className="btn btn-light">Back To Search</Link>
               Hireable: {' '}
            {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                <i className="fas fa-times-circle text-danger" />
            )}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" alt="" style={{ width: "150px" }} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username:</strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company:</strong> {login}
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website:</strong> {login}
                            </Fragment>}
                        </li>
                    </ul>
                </div>

            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-danger">Public Repos {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </Fragment>
    )
}

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

export default User

