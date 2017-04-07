import React, {Component} from 'react';
import {isURL} from 'validator';
import axios from 'axios';


class urlForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrlSubmission = this.handleUrlSubmission.bind(this);

    this.state = {
      longUrl: '',
      shortUrl: '',
      shortId: 0,
      errorMessage: '',
    };
  }


  handleSubmit(e) {
    e.preventDefault();
    if (!isURL(this.state.longUrl)) {
      this.setState({
        longUrl: '',
        shortUrl: '',
        shortId: 0,
        errorMessage: 'Sorry that isn\'t a valid URL. Please provide a correct format eg: http://example.com'
      });
      this.refs.inputUrl.value= '' ;
      return;
    }
    this.handleUrlSubmission();
    this.setState({
      longUrl: '',
      errorMessage: '',
      shortUrl: 'localhost:8080/api/' + this.state.shortId
    });
    this.refs.inputUrl.value= '' ;
  }


  handleUrlSubmission(){
    var self = this;
    axios.post('/api/insert',
    {longUrl: self.state.longUrl})
    .then(response => {
      self.setState({
        shortId: response.data.short
      }, this.makeShortUrl);
    })
    .catch(function (err) {
      console.log('error', err);
    });
  }


  makeShortUrl() {
    var createdString = 'localhost:8080/api/' + this.state.shortId;
    this.setState({
      shortUrl: createdString
    });
  }

  handleChange(e) {
    this.setState({longUrl: e.target.value},
    );
  }


  render() {
    return (
      <div className="urls text-center">
      <form className='form' onSubmit={this.handleSubmit}>
      <input className='input' ref='inputUrl' placeholder='Paste a link to shorten it' onChange={this.handleChange}/>
      <br />
      <button className="btn btn-default btn-block">Shorten Url</button>
      </form>
      </div>
    );
  }

}

export default urlForm;
