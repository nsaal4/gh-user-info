import React, {Component} from 'react';
import {Icon} from 'react-materialize';

class Projects extends Component {
  render() {
    return(
      <div className="">
        <h5>{this.props.name}</h5>
        <Icon>share</Icon>
      </div>
    )
  }
}

export default Projects;