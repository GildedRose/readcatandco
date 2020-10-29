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
          <h2>Shop All</h2> 
          <Cart />
          <Category />
          <ProductList />
          <p></p>  

        </div>
      </Col>
    </Row>
  </Container>
        
)