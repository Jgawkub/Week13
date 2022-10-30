import React from 'react';
export default class Info extends React.Component {
    
    
    
    constructor(props) {
        super(props);
        this.state = {
            //user:'',
            //pw:""
   //Here is where I would have put user and pw as states but couldnt get it to log the values from the fields in the inputes below. 
        };

    } 
  

    render(){

        function logInfo(){//I was unable to firgure out how to log the info put into the pass word and username fields. Was trying to use documentation from React. Ended up scrapping it.
            console.log('HI')
           
        }
        
        return (<div>
        <div className='card space border border-dark '>
        <h3 className='text-center'>Login to Listify</h3>
        <form >
        <div className='form-control'>
        <input
        className='input-group'
        name='username'
        type='text'
        placeholder='Username' 
        //value=this.state.user 
        ></input>
        </div>
        <div className='form-control'>
            <input
        className='input-group'
        name='password'
        type='password'
        placeholder='Password'
        //value=this.state.pw
       ></input>
        </div>
        </form>
        <button className='btn btn-primary form-control' onClick={logInfo}>LOGIN</button>
        </div>
        </div>
        )
        
    
     
    }
  }