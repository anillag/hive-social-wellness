import React from "react";
// import "../styles/main.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-white text-center m-5 rounded-xl p-6 w-2/6">
        <div className="flex justify-between space-x-5">
          <h5 className="font-sans font-semibold text-lg">{this.props.name}</h5>
          <button
            onClick={this.props.action}
            className="bg-red-500 text-white font-medium px-2 py-1 rounded-xl hover:bg-red-900"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
