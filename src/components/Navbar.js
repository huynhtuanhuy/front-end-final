import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
axios.defaults.withCredentials = true;
class Navbar extends Component {
    _onLogout=(e)=>{
        axios.get('https://server-musicbattle.herokuapp.com/api/auth/logout')
        .then((res)=>{
            this.props.history.push(`/`);
        })
      }
      _onChangeInput=(e)=>{
          this.props.setSearchText(e.target.value);
      }
    render() {
     
    return (
      <div className="navbar bg-navbar-custom">
        <div className="container-fluid">
            <div className="col-1 logo-img" >
        {/* logo */}
       <Link to={'/Mainpage'}>
            <img style={{width:"55px"}} src=""/> </Link>
                </div>
               
            <form className="col-4">    
                <input onChange={this._onChangeInput} placeholder="Search Song ..." className="form-control bg-input"/>
            </form>
            <div className="col-2 ">
                <Link to={"CreateRoom"}><span className="text-light profile">CreateRoom</span></Link>
            </div>
            <div className="col-2 ">
                 <Link to={"profile"}> <span className="text-light profile">View Profile</span></Link>
            </div>
            <div className="col-3">
            {
                this.props.UserName ?  <div> <span className="welcome-text">Welcome:{this.props.UserName} </span>
                < span className="logout" onClick={this._onLogout}> Logout</span> </div> : <Link to={'login'} ><button className="btn btn-primary btn-block"> Login </button> </Link>
            }
           
            
            </div>
        </div>
        
      </div>
    );
  }
}

export default Navbar ;