import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import logo from '../images/whole.png';
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import Signup from './Signup';
import Signin from './Signin';


const Header = () => {
    const [model, setmodel] = useState(false)
    const [modol, setmodol] = useState(false)
    const [True, setTrue] = useState(false)
    const [width, setwidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setwidth(window.innerWidth)
            if (width < 660) {
                setTrue(true)
            }
            else {
                setTrue(false)
            }
        })
    }, [width])


    return (
        <>
            <Modal size='lg' isOpen={model} toggle={() => setmodel(!model)}>
                <ModalHeader toggle={() => setmodel(!model)}>
                    <p style={{
                        color: 'green',
                        fontSize: '15px',
                        fontWeight: 'bold',
                    }}> Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </ModalHeader>
                <ModalBody >
                    <Signup />
                </ModalBody>
            </Modal>
            <Modal size='lg' isOpen={modol} toggle={() => setmodol(!modol)}>
                <ModalHeader toggle={() => setmodel(!modol)}>
                    <p style={{
                        color: 'green',
                        fontSize: '15px',
                        fontWeight: 'bold',
                    }}> Let's learn, share & inspire each other with our passion for computer engineering. Sign In now 🤘🏼</p>
                </ModalHeader>
                <ModalBody >
                    <Signin />
                </ModalBody>
            </Modal>

            <div className="headercontainer" >
                <nav className="navbar navbar-sm navbar-light bg-light">
                    <div className="container-fluid d-flex  justify-content-around-md">
                        <Link className="navbar-brand" to="#"><img src={logo} alt="" /></Link>
                        <div className="search" style={{
                            width: '40%',
                            alignItems: 'center', border: '1px solid black',
                            borderRadius: '30px', padding: '0px 10px', margin: '0px 10px',
                        }}>
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Search for your favorite groups in ATG" style={{
                                border: 'none', outline: 'none',
                                width: '100%', padding: '10px',
                            }} />

                        </div>
                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar me-auto mb-2 mb-lg-0 d-flex" style={{
                                listStyle: "none"
                            }}>
                                <li className="nav-item ">
                                    <Link className="nav-link dropdown-toggle active text-black" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Create account.<br />
                                        <span style={{ color: "blue", }}>It's free!</span>
                                    </Link>
                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#" onClick={() => { setmodel(true) }}>SIGN UP</Link></li>
                                        <li><Link className="dropdown-item" to="#" onClick={() => { setmodol(true) }}>SIGN IN</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={` ${True ? "container-fluid sec-header d-flex justify-content-between align-items-center" : 'd-none'}`} style={{
                    position: "absolute",
                    zIndex: "1",
                    marginTop: "10px",
                }}>
                    <i class="fa-solid fa-arrow-left" style={{
                        color: "white",
                        fontSize: "20px", marginRight: "10px"
                    }}></i>
                    <button type="button" className="btn btn-outline-secondary rounded" onClick={() => { setmodel(true); }}>Join Group</button>

                </div>

            </div>
        </>
    )
}

export default Header