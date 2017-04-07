import React, {Component} from 'react';

class urlForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)

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
  
  render() {
    return (
      <div className="urls text-center">
      <form className='form' >
      <input className='input' ref='inputUrl' placeholder='Paste a link to shorten it' onChange={this.handleChange}/>
      <br />
      <button className="btn btn-default btn-block">Shorten Url</button>
      </form>
      </div>
    );
  }

}

export default urlForm;
