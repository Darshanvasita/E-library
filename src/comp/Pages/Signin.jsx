import React, { useEffect, useState } from 'react';
import './Signin.css';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import auth from '../../../firebase';
import { useNavigate } from 'react-router';

const Signin = () => {
  const [userData, setData] = useState({});
  const navigate = useNavigate();

  function googleAuth() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.providerData);
        setData(user.providerData[0]);
        navigate('/');
      }
    });
  }, [navigate]);

  return (
    <div className="container my-5">
      <div className="row d-flex align-items-center">
        {/* Login form */}
        <div className="col-md-6 col-12">
          <div className="login p-4 shadow">
            <h2 className="text-center mb-4 text-white">Login</h2>
            {/* <div className="mb-3">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="mb-3">
              <input type="submit" className="btn btn-primary w-100" value="Sign in" />
            </div> */}
         
            <button type="button" className="btn btn-light w-100 mb-3" onClick={googleAuth}>
              <img src="public/google (2).png" alt="Google Icon" style={{ width: "20px", marginRight: "10px" }} />
              Sign in with Google
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="col-md-6 col-12 text-center">
          <img
            src="https://res.cloudinary.com/diyqncua4/image/upload/v1728322912/a5lvaapzmwt87tf25egh.png"
            alt="Login Illustration"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
