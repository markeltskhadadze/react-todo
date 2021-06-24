import React from "react";
import "./App.css";

class List extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="list">
              <div className="elemList">
                <input
                  type="checkbox"
                  checked={this.props.checked}
                  onChange={(event) => this.props.change(event, this.props.id)}
                />
                <p>{this.props.text}</p>
                <button onClick={this.props.onClick}>Delete</button>
              </div>
            </div>
          );
    }
}

export default List;
