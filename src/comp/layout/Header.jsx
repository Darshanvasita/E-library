import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

const Header = () => {
    // function logout(){
    //     signOut(auth).then(()=>{
    //     alert("logout successfuly");
    //   window.location.reload();
    //   });
    //   }
    // const [authuser,setAuthuser]=useState([])
    // function Show(){
    //     onAuthStateChanged(auth,(user)=>{
    //         setAuthuser(user)
    //     })
    // }
    // useEffect(()=>{
    //     Show()
    // },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" to="/" >Home  </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/Book" >Book </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to="/About" >About </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link " to="/SignIn" >Login <img src="./google (2).png" alt="" style={{height:"25px", width:"25px"}} /> </Link>
                            </li>
                            {/* {
                           auth == null?
                                <li className="nav-item ">
                                <Link className="nav-link active" to="/data" >SignUp</Link> </li> :
                                <li className="nav-item ">
                                <Link className="nav-link active"onClick={logout} >Logout </Link>  </li> }*/
}
                                                        
                        </ul> 


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
