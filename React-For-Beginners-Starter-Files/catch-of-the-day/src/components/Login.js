import React from "react";
import PropTypes from "prop-types";
const Login = (props) => (
  <nav className="login">
    <h2>INVENTORY LOGIN</h2>
    <p> sign in to manage the stores inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      log in to Facebook
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      log in to FACEBOOK
    </button>
  </nav>
);
Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
export default Login;
