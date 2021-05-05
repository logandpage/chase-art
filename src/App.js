import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
// import { HashRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Thoughts from './components/Thoughts';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  }, 
  uri: '/graphql'
  // uri: 'http://localhost:3001/graphql'
});

function App() { 
  
  return (
    <div>
    <ApolloProvider client={client}>
    <Router>
    <div id="wrapper">
      <Header></Header>
     {/* <Switch> */}
            <Route exact={true} path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Thoughts" component={Thoughts} />
            <Route exact path="/About" component={About} />
     {/* </Switch> */}
     <Footer></Footer>
    </div>
    </Router>
    </ApolloProvider>
    </div>
  )
}

export default App;