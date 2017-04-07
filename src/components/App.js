import React, {Component} from 'react';
import axios from 'axios';

import Header from './Header';


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
      <Header message = {this.state.pageHeader} />
      <div>
      </div>
      </div>

    );
  }
}


export default App;
