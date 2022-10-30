import React from "react";
import ToDo from './To_Do_List.png';
export default class Header extends React.Component{
    render(){
// I was having some problems putting this into my navbar component, decided to work on it seperately 
        return <div>
        <div className="card">
            <img src={ToDo} id='background'/>
            <div className="card-img-overlay">
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-8">
                        <h1 className="card-title text-dark">Listify</h1>
                        <p className="card-test fw-bold fs-4">The convenient way of keeping track of your life </p>
                        <div className="col-sm-3">
                            </div> 
                    </div>
                </div>

            </div>
        </div>

</div>
}
}
      
  
