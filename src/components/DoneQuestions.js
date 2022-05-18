import React from 'react';
import { connect } from 'react-redux';

function DoneQuestions({ questions }) {

  console.log(questions)
  return (
    <div>
        <div className='row'>
            <div className='col s12' style={{ borderBottom: '1px solid grey'}}>
                <h2>Done</h2>
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

const mapStateToProps = ({ questions}) => {
  return {
    questions
  }
}

export default connect(mapStateToProps)(DoneQuestions);