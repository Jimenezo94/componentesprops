import React, { Component } from 'react';
import Lista from '../components/Lista';
import NavbarComponent from '../components/NavbarComponent';

export default class ContainerComponents extends Component {
  render() {
    return <div>
        <NavbarComponent/>
        <Lista/>
    </div>;
  }
}

