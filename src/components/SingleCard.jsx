import React, { Component } from 'react'

class SingleCard extends Component {
  render() {
    const {login,avatar_url,html_url} = this.props.userdata;
    return (
        <div className="singlecard d-flex justify-content-between  my-3">
          <div className="box d-flex">
            <img src={avatar_url} />
            <h5 className="card-title mx-2">{login}</h5>
          </div>
          <a href={html_url} target="_blank" className="btn btn-outline-success mx-2">Go profile</a>
        </div>
    )
  }
}

export default SingleCard