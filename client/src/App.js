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
import { NavigationBar } from './components/Nav/Nav.js';
//import { Jumbotron } from './components/Jumbotron';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
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
              <Switch>
                <Route exact path="/Home" component={Home} />
                <Route path="/ShopAll" component={ShopAll} />
                <Route path="/About" component={About} />
                <Route path="/ContactUs" component={ContactUs} />
                <Route path="/LogIn" component={LogIn} />
                <Route path="/CreateAccount" component={CreateAccount} />
                <Route path="/profile/:email?" component={Profile} />
                <Route component={NoMatch} />
              </Switch>
              <Footer />
            </Router>
          </Layout>
        </React.Fragment>
      </ApolloProvider>
    )
  }
}
export default App;
