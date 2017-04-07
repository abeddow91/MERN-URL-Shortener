import React, {Component} from 'react';
import {isURL} from 'validator';

class urlForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      longUrl: '',
      shortUrl: '',
      shortId: 0,
    };
  }

  handleChange(e) {
    this.setState({longUrl: e.target.value},
    );
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
