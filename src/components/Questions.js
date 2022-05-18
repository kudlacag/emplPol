import React, { Fragment } from 'react'
import DoneQuestions from './DoneQuestions'
import NewQuestions from './NewQuestions'

function Questions() {
  return (
    <Fragment>
       <NewQuestions />
       <DoneQuestions />
    </Fragment>
  )
}

export default Questions