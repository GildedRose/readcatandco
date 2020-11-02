import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';
import Category from './Category';
import Cart from './Cart';

export const ShopAll = () => (
  <Container>
    <Row>
      <Col>
        <div>
            <img src={require('./../assets/images/ShopAll.png')} width="100%" height="100%" alt="Shop All in retro style" />
          </div>
          </Col>S
        <div>
          <ProductList />
          <p></p>  
        </div>
    </Row>
  </Container>
        
)