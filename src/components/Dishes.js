import React from 'react'

import logo from 'F:/React Course (Youtube)/foodorder/src/logo.png';


export default function Dishes(props) {

    const mapdish=props.dishes.map((dish)=>{
        return(

            <div className="col my-3" key={dish.id}   >
                <div className="card" id="card" style={{backgroundColor:props.mode==="light"?"white":"#171717",color:props.mode==="light"?"#171717":"white",borderBlockColor:props.mode==="light"?"#171717":"white"}}  >
                    <img className="card-img-top" src={dish.image} alt="Card image cap" height="200px" />
                    <div className="card-body"  >
                        <h5 className="card-title">{dish.name}</h5>
                        <a onClick={props.Avail} className="btn btn-success" >Available Soon..</a>
                    </div>
                 </div>
            </div>
        
               
        );
    });

    return (
      
        <div className="col-lg-12 col-md-12 ml-lg-3 ">
            <div className="row">
                {mapdish}
            </div>
        </div>

    )
}
