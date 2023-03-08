import React, { Component } from 'react'

class Header extends Component {
  constructor(){
    super();
    this.state={
        keyword:""
    }
  }
  formSubmit=e=>{
    e.preventDefault();
    this.props.searchValue(this.state.keyword)
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form onSubmit={this.formSubmit}
              className="d-flex justify-content-center align-items-center"
              role="search"
            >
              <div className="input-group">
                <input onChange={e=>{
                    this.setState({keyword:e.target.value})
            }}
                  type="text"
                  className="form-control"
                  placeholder="Search or jump to..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button className="btn" type="button" id="button-addon2">
                  /
                </button>
              </div>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                   Pull requests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Issues
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Codespaces
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">  
                   Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>
              
            </ul>
            <div className="box">
               <i className="fa-regular fa-bell"></i>
               <i class="fa-solid fa-plus ms-3"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header