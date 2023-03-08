import React, { Component } from "react";

import SingleCard from "./SingleCard";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="row m-0">
          <div className="col-sm-12 col-md-3 p-0">
            <div className="left">
              <div className="container w-75 py-4">
                <p>
                  Semasgerova <i class="fa-solid fa-chevron-down"></i>
                </p>
                <div className="border my-3"></div>
                <div className="box d-flex justify-content-between align-items-center">
                  <p className="m-0">Top Repositories</p>
                  <div className="btn">
                    <i class="fa-solid fa-book-bookmark"></i> New
                  </div>
                </div>
                <input
                  type="text"
                  className="my-3"
                  placeholder="Find a repository..."
                />
                <div className="links d-flex flex-column">
                  <a href="#">Semasgerova/vscode</a>
                  <a href="#">Semasgerova/task</a>
                </div>
                <p className="mt-4">Recent activity</p>
                <div className="txt">
                  <p>
                    {" "}
                    When you take actions across GitHub, we’ll provide links to
                    that activity here.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 p-0 " >
            <div className="right">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-8 " style={{ 'overflow-y': 'scroll','height': '90.6vh'}}>
                    <div className="top my-3">
                      <a href="#" className="me-3">
                        Following
                      </a>
                      <a href="#">
                        For you <span>Beta</span>
                      </a>
                    </div>
                    <div className="border"></div>
                    <div className="bottom">
                      {this.props.uservalue.map((item) => {
                        return <SingleCard userdata={item} key={item.id} />;
                      })}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 my-4">
                    <p>Latest changes</p>
                    <div className="box mb-4">
                      <p>6 hours ago</p>
                      <a href="#">
                        Code scanning adds support for Kotlin 1.8.0 analysis
                        (beta)
                      </a>
                    </div>
                    <div className="box">
                      <p>10 hours ago</p>
                      <a href="#">
                        GitHub Actions – Removal of additional label option for
                        GitHub-hosted larger runners
                      </a>
                    </div>
                    <div className="box my-4">
                      <p>20 hours ago</p>
                      <a href="#">
                        GitHub Copilot for Business is now widely available
                      </a>
                    </div>
                    <div className="box">
                      <p>2 days ago</p>
                      <a href="#">
                        Dependency graph supports the Python PEP 621 standard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
