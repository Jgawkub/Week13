import React from "react";
import Login from "./components/login";
import Navbar from "./components/navbar";
import Header from "./components/header";
import './App.css'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {}


  }

componentDidMount=()=>{

}


  render(){
    console.log ('render')
  
 return <div className='container'>
  <Header/>
  <Navbar/>
<div className="container box d-flex align-items-center justify-content-center">
  <Login/>
  </div>
  </div> 
      
  
  }
 }
export default App;
