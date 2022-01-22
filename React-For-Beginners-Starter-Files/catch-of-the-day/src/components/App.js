import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  static propTypes = {
    match: PropTypes.object,
  };
  componentDidMount() {
    // console.log("mounted");
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    // const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes/`, {
      context: this,
      state: "fishes",
    });
  }
  componentDidUpdate() {
    //  console.log("it works");
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    console.log("unmounted");
    base.removeBinding(this.ref);
  }
  addFish = (fish) => {
    console.log("adding a fish");
    // take a new copy of existing state
    const fishes = { ...this.state.fishes };
    //add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };
  updateFish = (key, updatedFish) => {
    //take a copy of current state
    const fishes = { ...this.state.fishes };
    //update the state
    fishes[key] = updatedFish;
    //set that to state
    this.setState({ fishes });
  };
  deleteFish = (key) => {
    //take a copy of state
    const fishes = { ...this.state.fishes };

    //update the state
    fishes[key] = null;
    // set the state
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
    // alert("loading");
  };
  addToOrder = (key) => {
    //take a copy of state
    const order = { ...this.state.order };
    //either add to the order or update the number of our order
    order[key] = order[key] + 1 || 1;
    // call setState to update our state object
    this.setState({ order });
  };
  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };
  render() {
    return (
      <div className=" catch-of-the-day">
        <div className="menu">
          <Header tagline=" fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        r
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}
export default App;
