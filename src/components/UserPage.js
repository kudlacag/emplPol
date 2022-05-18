import React from 'react';

import userOne from '../images/user1.jpg';

function UserPage() {
  return (
    <div>
        <h3>Poll by Sarahedo</h3>
        <img src={userOne} alt="username" style={{borderRadius: '50%', width: '350px', height:'auto'}}/>
        <h3>Would You Rather</h3>
        <div className='row '>
            <div className='col s6'>
                <h5>Build Our new application with Javascript</h5>
                <button type="button" class="block">Select</button>
                
            </div>
            <div className='col s6'>
            <h5>Build Our new application with Javascript</h5>
            <button type="button" className="block">Select</button>
            </div>
        </div>
    </div>
  )
}

export default UserPage