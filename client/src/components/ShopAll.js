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
            <img src={require('./../assets/images/ShopAll.png')} width="100%" height="100%" alt="The Red Cat and Co in retro style" />
          </div>
        <div>
          <ProductList />
          <p></p>  

        </div>
      </Col>
    </Row>
  </Container>
        
)