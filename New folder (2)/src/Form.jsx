import React from 'react'
import "./Form.scss";
const Form = () => {
  return (
    <div className='testing'>
      <nav>
        <ul>
          <li>
            <a href="#">one</a>
          </li>
          <li>
            <a href="#">Two</a>
          </li>
          <li>
            <a href="#">one</a>
          </li>
          <li>
            <a href="#">one</a>
          </li>
          <li>
            <a href="#">one</a>
          </li>
        </ul>
      </nav>
      <div>
        <label htmlFor="username">UserName</label><br />
        <input type="text" value="" name="username" /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" value="" name="password" /><br />
        <input type="submit" />
      </div>
      <p>this is testing paragraph</p>
      <h3> here is example for useing mixin</h3>
      <h5>using include mixin in another mixin</h5>
      
      <button id='report'>report</button>
      <button id='submit'>submit</button>
    </div>
  )
}

export default Form