import React from 'react'
import { Link } from "react-router-dom";

import sign from "../images/Group 3.png";

const Signin = () => {


    return (
        <>

            <div className="signin" id='signin' style={{
                width: '100%',
                margin: 'auto',
            }}>
                <div className="container ">
                    <div className={`head d-flex justify-content-around`}>
                        <h1>Sign In</h1>
                        <p className='my-3'>Don't have an account yet? <Link to="#" S>Create account for free</Link></p>
                    </div>
                    <div className="body d-flex justify-content-around">
                        <form action="">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3" style={{
                                width: '100%',
                                borderRadius: '30px',
                                padding: '10px 0px',
                                fontSize: '20px',
                            }}> Sign In</button>

                        </form>
                        <img className={`img-fluid imag `} src={sign} alt="" />
                    </div>
                    <div className="footer d-flex justify-content-around flex-column">
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
                            fontSize: '15px',
                            textAlign: 'center',
                            marginTop: '20px',
                            color: 'black',
                            cursor: 'pointer',

                        }}>
                            Forgot Password?

                        </p>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Signin