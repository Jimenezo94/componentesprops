import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { endpoint } from "../helpers/url";
import CardComponents from './CardComponents';


export default class Lista extends Component {
  constructor() {
    super();
    this.state = {
      personajes: [],
    };
  }

  componentDidMount() {
    this.getData();
  }


  async getData() {
    const resp = await fetch(endpoint);
    const data = await resp.json();
    const { results } = data;
    console.log(results);
    this.setState({ personajes: results });
  }

  render() {
    return (
      <Container>
        <hr />
        <Row lg={4}>
          {this.state.personajes.map((per, ) => (
            
            <CardComponents
            key={per.id}
            movies={per}/>
                      
          ))
          }
        </Row>
      </Container>
    );
  }
}
