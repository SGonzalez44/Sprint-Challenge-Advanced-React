import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import PlayerList from "./components/PlayerList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: {}
    };
  }

  componentDidMount = () =>
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ players: res.data }));

  render() {
    return (
      <div className="App">
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}
export default App;