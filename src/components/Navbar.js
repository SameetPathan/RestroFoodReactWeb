import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {

  const [mystyle, setmystyle] = useState({
    color:'black',
    backgroundColor:'white',

  })

  const toggleStyle=()=>{
    if(mystyle.backgroundColor=='white')
    {
      setmystyle({
        color:'white',
        backgroundColor:'black'
      })
      settextbtn('Enable Dark mode');
      var x = document.getElementById("root");
      x.style.backgroundColor = "black";
      x.style.color= "white";
    }
    else{
      setmystyle({
        color:'black',
        backgroundColor:'white',
      })
      settextbtn('Disable Dark mode');
      var x = document.getElementById("root");
      x.style.backgroundColor = "white";
      x.style.color= "black";
    }
  }
  const [btntxt,settextbtn]=useState('Enable Dark mode')

    return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
    
          </ul>
          <div className={`custom-control custom-switch text-${props.mode=="light"?"dark":"light"}`}>
              <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.togglemode} />
              <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
          </div>

        </div>
      </nav>
     
    )
}






Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"Set Title Here"
}



