import React from 'react'

function Footer() {
  return (
    <footer className="page-footer" style={{ marginTop: '15px', backgroundColor: 'green', padding: '100px'}}>
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Employee Poll Projecr</h5>
          {/* <p className="grey-text text-lighten-4">Employee Poll Project from Udacity.</p> */}
        </div>

      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2022 Copyright Ramadan Ahmed

      </div>
    </div>
  </footer>
  )
}

export default Footer