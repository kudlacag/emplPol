import React from 'react';
import { connect } from 'react-redux';


function NewQuestions() {
  return (
    <div>
        <div className='row'>
            <div className='col s12' style={{ borderBottom: '1px solid grey'}}>
                <h2>New Questions</h2>
            </div>
            <div className='row'>
                <div className='col s4'>
                   <h4>mtsamis</h4>
                   <p>4:11 PM 12/12/2017</p>
                   <button type='button' className='block'>show</button>
                </div>
                <div className='col s4'>
                   <h4>mtsamis</h4>
                   <p>4:11 PM 12/12/2017</p>
                   <button type='button' className='block'>show</button>
                </div>
                <div className='col s4'>
                   <h4>mtsamis</h4>
                   <p>4:11 PM 12/12/2017</p>
                   <button type='button' className='block'>show</button>
                </div>
                <div className='col s4'>
                   <h4>mtsamis</h4>
                   <p>4:11 PM 12/12/2017</p>
                   <button type='button' className='block'>show</button>
                </div>
    

            </div>
        </div>
    </div>
  )
}

export default connect()(NewQuestions);