import React from 'react';
import styled from 'styled-components';
import {Container, Row, Column } from './GrideStyle';



const Grids = (props) => {
  return(
    <Container colorName='#ccc'>
        <p>Test para</p>
        <Row colorName="#ccc">
            <Column lg='3' sm='6' md='4' xs='12'><p>1</p></Column>
            <Column lg='3' sm='6' md='4' xs='12'><p>4</p></Column>
            <Column lg='3' sm='6' md='4' xs='12'><p>5</p></Column>
            <Column lg='3' sm='6' md='4' xs='12'><p>6</p></Column>
        </Row>
        <Row>
            <Column lg='4' sm='6' md='4' xs='12'><p>7</p></Column>
            <Column lg='4' sm='6' md='4' xs='12'><p>8</p></Column>
            <Column lg='4' sm='6' md='4' xs='12'><p>9</p></Column>
            <Column span='1'><p>10</p></Column>
            <Column span='1'><p>11</p></Column>
            <Column span='1'><p>12</p></Column>
        </Row>
        <Row>
          <Column>
            <p>Test para</p>
          </Column>
        </Row>

        <Row>
          <Column>
            <h1>Responseive Gride</h1>
          </Column>
        </Row>

        <Row>
          <Column xs='12' sm='6' md='8'><p>md:8 sm:6 xs:12 </p></Column>
          <Column xs='12' sm='6' md='4'><p>md:4 sm:6 xs:12 </p></Column>
        </Row>
    </Container>
  )
}

export default Grids;
