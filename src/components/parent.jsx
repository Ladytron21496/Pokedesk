import React, { Component } from "react";
import CardComponent from "./component";
import "bootstrap/dist/css/bootstrap.min.css";
import Modals from "./Modal";
import SearchBar from "./searchbar";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      clickedobj: {},
      flag: false,
      searchfield: ""
    };
  }

  handleSearchChange = e => {
    this.setState({ searchfield: e });
  };
  handleClick = obj => {
    this.setState({
      clickedobj: obj,
      flag: true
    });
  };

  handler = () => {
    this.setState({
      flag: false
    });
  };
  componentDidMount() {
    let urllist = [];

    const videoUrls = async () => {
      let i = 1;

      for (i; i < 200; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const json = await response.json();
        const obj = {};
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
        obj["name"] = json.name;
        obj["id"] = json.id;
        obj["url"] = url;
        obj["stats"] = json.stats;

        urllist.push(obj);
      }
      this.setState({ arr: urllist });
    };

    videoUrls();
  }
  render() {
    const { arr, searchfield } = this.state;
    const filteredarr = arr.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div>
        <SearchBar change={this.handleSearchChange} />
        {filteredarr.map(item => (
          <CardComponent
            key={item.id}
            name={item.name}
            url={item.url}
            stats={item.stats}
            sel={this.handleClick}
          />
        ))}
        {this.state.flag && (
          <Modals
            handler={this.handler}
            name={this.state.clickedobj.name}
            stats={this.state.clickedobj.stats}
            url={this.state.clickedobj.url}
          />
        )}
      </div>
    );
  }
}

export default Parent;
