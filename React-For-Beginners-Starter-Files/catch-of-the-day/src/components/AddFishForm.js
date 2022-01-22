import React from "react";
import PropTypes from "prop-types";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func,
  };

  createFish = (event) => {
    event.preventDefault();
    const Fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(Fish);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="Fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          placeholder="name"
        ></input>
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="price"
        ></input>
        <select name="status" ref={this.statusRef}>
          <option value="avalable"> fresh </option>
          <option value="unavalable"> soldout!! </option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="desc"></textarea>
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="image"
        ></input>
        <button type="submit"> +AddFish </button>
      </form>
    );
  }
}
export default AddFishForm;
