import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => (
  <Container>
      <Row>
          <Col>
              <div>
                <h2 class="text-center"><img src={require('../assets/images/redcat.jpeg')} width="35%" height="35%" alt="Red Cat Logo" /></h2>
                <div class="container">
                    <div class="row">
                        <div class="col">
                          <h5 class="text-center">About the Owner</h5>
                          <p>After relocating from New York to South Texas, Jessica found herself nostalgic for home. While San Antonio harbored trendy little shops, it lacked the same abundance of locally made merchantiles New York City offered.</p>
                            
                          <p>Wistful, but determined to bring a touch of home to San Antonio, she set out on a mission to bring local goods together in one cozy location: Red Cat & Co.</p>

                          <p>Intent on sharing her love of independent artists' merchandise with her newfound home, she branched out and found like-minded quirky business owners in the area. With a love of fun and unique items, Red Cat & Co became a central location for items unavailable elsewhere.</p>

                          <p>With a distinctive little bus as the storefront location, she maintained mobility and an ambiance unlike others in the area. Though she may not have set out to become a trendsetter, she found a special way of captivating her customers with the eclectic wares she procured for sale.</p>
                        </div>
                        
                        <div class="col">
                          <img src={require('../assets/images/owner1280x.jpg')} class="text-center border" width="85%" alt="Owner" />
                        </div>
                    </div>
                </div>  
              </div>
          </Col>
      </Row>
  </Container>
        
)