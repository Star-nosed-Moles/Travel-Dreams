import React from 'react';

const textAreaStyle = {
  height: '100%',
  width: '100%',
  border: 'none'
}

const textAreaContainerStyle = {
  minHeight: '500px'
}

const lorem = "Sed ut perspiciatis unde omnis"

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange = function (e) {
    this.setState({ textValue: e.target.value });
  }

  handleSave = function () {
    const date = new Date();
    // send this.state.value to db
    // create new post 'localhost:3000/post' method: POST

    /* wants 
    userID, from state
    username, from state
    location, IMPORTANT
    description,
    date_created, auto-generate
    visited, from here OPTIONAL
    lng
    lat
    */
    
    fetch('http:/localhost:3000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: this.state.textValue,
        location: 'Tokyo',
        date_created: date,
        userID: this.props.userID,
        username: this.props.username,
      })
    })
  }

  render() {
    console.log('new card state', this.state);

    return (
      <div>
        <button onClick={this.handleSave} >Save Post</button>
        <div className="text-entry-container" >
          <textarea value={this.state.textValue} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default NewCard;