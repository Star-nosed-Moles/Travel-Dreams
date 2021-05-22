import React from 'react';

const auth = (props) => {


    return (
        <div className='text-entry'>
            <p>
                Username:
                <input onChange={(e) => setUsername(e.target.value)}
                />
            </p>
            <p>
                Password:
                <input onChange={() => console.log('placeholder')} />
            </p>
        </div>
    )
}




export default auth;

/*
{

}
*/