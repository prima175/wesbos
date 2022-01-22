import React from "react";
import PropTypes from "prop-types";
// import { render } from "stylus";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };
  // constructor() {
  // super();
  // this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();
  // handleClick() {
  // alert("heyyy!!!!!!");
  // }
  goToStore = (event) => {
    event.preventDefault();
    // console.log("gotostore");
    // get the text from the input
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2> please enter a store</h2>
        <button onClick={this.handleClick}> clickMe</button>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit "> visitstore</button>
      </form>
    );
  }
}

export default StorePicker;
