import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { ShopAll } from './components/ShopAll';
import { About } from './components/About';
import { ContactUs } from './components/ContactUs';
import LogIn from './components/LogIn'
import CreateAccount from './components/CreateAccount';
import Profile from './components/Profile';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layouts';
import NavigationBar from './components/Nav/Nav.js';
import { FooterBar } from './components/Footer/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from "./utils/GlobalState";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Category from './components/Category';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: 'http://localhost:3001/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <NavigationBar />
          <Layout>
            <Router>
              <StoreProvider>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/ShopAll" component={ShopAll} />
                  <Route path="/About" component={About} />
                  <Route path="/ContactUs" component={ContactUs} />
                  <Route path="/LogIn" component={LogIn} />
                  <Route path="/CreateAccount" component={CreateAccount} />
                  <Route path="/Cart" component={Cart} />
                  <Route path="/profile/:email?" component={Profile} />
                  <Route path="/products/:id" component={Detail} />
                  <Route path="/Category" component={Category}/>
                  <Route component={NoMatch} />
                </Switch>
              </StoreProvider>
            </Router>
          </Layout>
          {/* <FooterBar></FooterBar> */}
        </React.Fragment>
      </ApolloProvider>
    )
  }
}
export default App;
