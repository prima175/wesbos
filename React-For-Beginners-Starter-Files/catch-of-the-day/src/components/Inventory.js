import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import PropTypes from "prop-types";
import Login from "./Login";
class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  };
  authenticate = () => {
    alert("ya");
  };
  render() {
    return <Login />;
    return (
      <div className=" inventory ">
        <h2>inventory</h2>
        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        ))}

        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>load sample fish</button>
      </div>
    );
  }
}
export default Inventory;
