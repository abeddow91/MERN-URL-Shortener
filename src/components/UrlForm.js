import React, {Component} from 'react';

class urlForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      longUrl: '',
      shortUrl: '',
      shortId: 0,
    };
  }

  render() {
    return (
      <div className="urls text-center">
      <form className='form'>
      <input className='input' ref='inputUrl' placeholder='Paste a link to shorten it'/>
      <br />
      <button className="btn btn-default btn-block">Shorten Url</button>
      </form>
      </div>
    );
  }

}

export default urlForm;
