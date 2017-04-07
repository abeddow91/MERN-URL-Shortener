import React, {Component} from 'react';
import axios from 'axios';

import Header from './Header';
import UrlForm from './UrlForm';


class App extends Component {

  state = {
    pageHeader: 'Url Shortener',
    urls: this.props.initialUrls
  };

  componentDidMount(){
    axios.get('/api/urls')
    .then(response => {
      this.setState({
        urls: response.data.urls
      });
    })
    .catch(console.error);
  }

  render () {
    return (
      <div className="App">
        <div className="jumbotron" >
        <Header message = {this.state.pageHeader} />
        <UrlForm />
        </div>
      </div>

    );
  }
}


export default App;
