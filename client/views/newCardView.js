import React from 'react';

const textAreaStyle = {
  height: '100%',
  width: '100%',
  border: 'none'
}

const textAreaContainerStyle = {
  minHeight: '500px'
}

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      moarState: 'no',
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