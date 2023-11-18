import React from "react"
import ReactDOM   from "react-dom/client"
/*
const Gretting = () => {
  return <h2>Hello world</h2>
}
function Gretting(){
  return React.createElement('h2',{},'Hello world');

}*/
/*
function Gretting() {
  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},'Hello world')
  )
}*/
/*Ruls: one function return one compenents */
/*
const Gretting = () =>{
  return(
    <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <a href = '#'>Hello</a>
        </li>
      </ul>
    </div>
    /* to add a 2nd one
        <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <a href = '#'>Hello</a>
        </li>
      </ul>
    </div> 
  )
}*/

const Gretting = () =>{
  return(
    <React.Fragment>
   <div>
      <h1>Hello world</h1>
      <ul>
        <li>
          <a href = '#'>Hello</a>
        </li>
      </ul>
    </div>
    /* to add a 2nd one
        <div className='someValue'>
      <h1>Hello world</h1>
      <ul>
        <li>
          <a href = '#'>Hello</a>
        </li>
      </ul>
    </div> 
    </React.Fragment>  )
}
export default Gretting


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Gretting></Gretting>)
