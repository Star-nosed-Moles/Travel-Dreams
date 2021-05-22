import React from 'react';
import { render } from 'sass';
// import map container
// import cards container
// import './stylesheets/styles.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'signup'
        };
        this.object = {
            'signup': <SignUpView />,
            'login': <LoginView />,
            'homePage': <HomePage />
        }

        // signupFunction = () => {
        //     // NOT THE FINAL FUNCTION, JUST AN EXAMPLE
        //     fetch('localhost:3000/user', { method: 'POST' })
        //      .then(this.setState({ current: 'homePage' }))
        // }
    }

    render(
        return(
            <div>
                {this.object[this.state.current]}
            </div>
        )
    )
}

    // {/*insert logo/image here  */}
    // <h1>Dreamcatcher</h1>
    // {/*input for username  */}
    // {/*input for pw */}
    // {/* login button */}
    // <h3>First time here?</h3>
    // {/* link to sign up -> redirect to signup page */}

export default App;