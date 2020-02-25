import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'NodeJS',
      'ReactJS',
      'VanillaJS',
    ]
  };

  handleInputChange = e => {
    this.setState({newTech: e.target.value})
  }

  handleRemove = tech => {
    // this.setState({newTech: e.target.value})
    console.log(tech);
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [ ...this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  render() {
    return (
      <>
        <h2>Tech list</h2>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map(tech => (
              <TechItem
                key={tech}
                tech={tech}
                handleClick={() => this.handleRemove(tech)}
              />
            ))}
            <TechItem />
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
            />
          <button type="submit">enviar</button>
        </form>
      </>
    );
  }
}

export default TechList;