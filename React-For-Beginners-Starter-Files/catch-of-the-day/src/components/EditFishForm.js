import React from "react";
import PropTypes from "prop-types";

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.string,
    updateFish: PropTypes.func,
  };
  handleChange = (event) => {
    // console.log(event.currentTarget.value);
    // console.log(event.currentTarget.name);
    //update the fish
    //take a copy of updated fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
    console.log(updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          type="text"
          placeholder="name "
          onChange={this.handleChange}
          value={this.props.fish.name}
        ></input>
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          placeholder="price"
          value={this.props.fish.price}
        ></input>
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="avalable"> fresh </option>
          <option value="unavalable"> soldout!! </option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          placeholder="desc"
          value={this.props.fish.desc}
        ></textarea>
        <input
          name="image"
          type="text"
          placeholder="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}
export default EditFishForm;
