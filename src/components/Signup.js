import React from 'react'
import { Link } from "react-router-dom";

import sign from "../images/Group 3.png";
const Signup = () => {

    return (
        <>

            <div className="signup" style={{
                width: '100%',
                margin: 'auto',
            }}>
                <div className="container ">
                    <div className={`head d-flex justify-content-around`}>
                        <h1>Create Account</h1>
                        <p className='my-3'>Already have an account? <Link to="#"
                        >Sign In</Link></p>
                    </div>
                    <div className="body d-flex justify-content-around">
                        <form action="">
                            <div className="row g-3">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Conform Password</label>
                                <input type="cpassword" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3" style={{
                                width: '100%',
                                borderRadius: '30px',
                                padding: '10px 0px',
                                fontSize: '20px',
                            }}> Create Account</button>

                        </form>
                        <img className={` img-fluid imag `} src={sign} alt="" />
                    </div>
                    <div className={`head d-flex justify-content-between`}>
                        <div>
                            <button type="submit" className="btn  mb-3" style={{
                                width: '100%',
                                borderRadius: '30px',
                                padding: '10px 0px',
                                border: "solid 1px black"

                            }}> <i className="fa-brands fa-facebook-f" style={{ marginRight: '5px' }}></i>Sign Up with Facebook</button>
                            <button type="submit" className="btn mb-3" style={{
                                width: '100%',
                                borderRadius: '30px',
                                padding: '10px 0px',
                                border: "solid 1px black"
                            }}><i className="fa-brands fa-google " style={{ marginRight: '5px' }}></i>Sign Up With Google</button>
                        </div>
                        <p style={{
                            fontSize: '12px',
                            color: 'gray',
                            textAlign: 'center',
                            marginTop: '20px',
                        }}>
                            By signing up, you agree to our <Link to="#">Terms & conditions</Link> and <Link to="#">Privacy Policy</Link>

                        </p>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Signup