import "./App.css";
import React from "react";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      pageTitle: "Todo",
      watch: false,
      inputValue: "",
      checked: false,
      listSelected: [],
    };
  }

  changeValueHandler = () => {
    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + "gbfg";
    this.setState({
      pageTitle: newTitle,
    });
  };

  toggleWatchList = (event) => {
    this.setState({
      watch: !this.state.watch,
    });
  };

  addNewList = (event) => {
    const { list, inputValue } = this.state;
    if (inputValue.length !== 0) {
      this.setState({
        list: [
          ...list,
          { text: inputValue, id: Math.round(Math.random() * 2000) },
        ],
        inputValue: "",
      });
    } else {
      console.log("Enter text");
    }
  };

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleChange = (event, id) => {
    const { listSelected } = this.state;
    if (event.target.checked) {
      this.setState({
        listSelected: [...listSelected, id],
      });
    } else {
      this.setState({
        listSelected: listSelected.filter((item) => item !== id),
      });
    }
    console.log(event.target.checked);
  };

  deleteSelected = () => {
    let newArray = this.state.list.filter(
      (item) =>
        !this.state.listSelected.some(
          (selectedItem) => selectedItem === item.id
        )
    );
    this.setState({
      list: newArray,
      listSelected: [],
    });
  };

  deleteList = (id) => {
    const { list,listSelected } = this.state;
    // list.filter(item => console.log(item.id))
    this.setState({
      list: list.filter((item) => item.id),
    });
    console.log(list);
  };

  render() {
    if (this.state.watch) {
      return (
        <div className="title-container">
          <h1>{this.state.pageTitle}</h1>
          <button
            className="toggle-btn"
            onClick={this.toggleWatchList.bind(this)}
          >
            Open
          </button>
        </div>
      );
    }

    return (
      <div className="title-container">
        <h1>{this.state.pageTitle}</h1>
        <button
          className="toggle-btn"
          onClick={this.toggleWatchList.bind(this)}
        >
          Close
        </button>
        <input value={this.state.inputValue} onChange={this.inputChange} />
        <button onClick={this.addNewList}>Add</button>
        {this.state.listSelected.length !== 0 ? (
          <button
            onClick={this.deleteSelected}
          >{`Delete Selected (${this.state.listSelected.length})`}</button>
        ) : null}
        {this.state.list.map((item) => {
          return (
            <List
              key={item.id.toString()}
              text={item.text}
              id={item.id}
              checked={this.state.listSelected.some(
                (selectedItem) => selectedItem === item.id
              )}
              change={this.handleChange}
              onClick={this.deleteList}
              // onChange = {this.changeValueInput}
              // onClick={this.addNewList}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
