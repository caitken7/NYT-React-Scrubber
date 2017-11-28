// Include React as a dependency
import React, { Component } from "react";
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";

// Create the Main component
class Main extends Component {
  render() {
    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to="/">
                  <img src="img/logo.png" alt="" id="logo" />
                  NYT-React Scrubber
                </Link>
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                  <li>
                    <Link to="/saved">Saved Articles</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Jumbotron */}
          <div className="jumbotron">
            <img src="img/react-times.png" alt="" id="reactLogo" />
            <h2 className="text-center">
              <strong>(ReactJS) New York Times Article Scrubber</strong>
            </h2>
            <h3 className="text-center">
              Search for and save articles of interest.
            </h3>
          </div>

          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <a href="https://github.com/caitken7">
              <p className="pull-right">
                <i className="fa fa-github" aria-hidden="true" />
                Built by Casey Aitken using React.js
              </p>
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

// Export the module back to the route
export default Main;
