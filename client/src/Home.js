import React from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import Category from './components/Category';

export const Home = () => (
  <div>
    <div>
      <img src={require('./assets/images/Red-Cat-Co.png')} width="100%" height="100%" alt="Photo of products in a bus" />
    </div>
    <div class="album py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <Link to="/5f99d35c13c736310880a69c">
              <div class="card mb-4 shadow-sm">
                <img src={require('./assets/images/Accessories.png')} width="100%" height="100%" alt="Photo of retro flower earrings" />
              </div>
            </Link>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src={require('./assets/images/Apparel.png')} width="100%" height="100%" alt="Photo of white and red shirt" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src={require('./assets/images/Bags.png')} width="100%" height="100%" alt="Photo orange bag" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src={require('./assets/images/Beauty.png')} width="100%" height="100%" alt="Photo of spray bottle" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img src={require('./assets/images/Home-Decor.png')} width="100%" height="100%" alt="Photo of retro chair and pillow" />
            </div>
          </div>
          <div class="col-md-4">
            <Link to="/ShopAll">
              <div class="card mb-4 shadow-sm">
                <a href="/ShopAll"><img src={require('./assets/images/Shop-All.png')} width="100%" height="100%" alt="Photo of yellow t-shirt" /></a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center bg-white">
      <h2 position-center> Follow Us On Instagram </h2>
      <Carousel>
        <Carousel.Item>
          <a href="https://www.instagram.com/redcatandco/"><img
            className="d-block w-100"
            src={require('./assets/images/instaredbus.png')}
            alt="Parked Mini Bus"
          /> </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.instagram.com/redcatandco/"><img
            className="d-block w-100"
            src={require('./assets/images/instamug.png')}
            alt="Third slide"
          /> </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://www.instagram.com/redcatandco/"><img
            className="d-block w-100"
            src={require('./assets/images/instashirt.png')}
            alt="Third slide"
          /></a>
        </Carousel.Item>
      </Carousel>
    </div>
  </div>

)

