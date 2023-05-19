import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import Posts from './Posts';
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import Signup from './Signup';
import img from '../images/Rectangle 2.png'
import img1 from '../images/Rectangle 2 (1).png'
const Body = () => {
    //code for change image for change in screen size
    const [width, setwidth] = useState(window.innerWidth)
    const [True, setTrue] = useState(false)

    const [img2, setimg2] = useState(img)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setwidth(window.innerWidth)

        })
        if (width < 660) {
            setimg2(img1)
            setTrue(true)
        }
        else {
            setimg2(img)
            setTrue(false)
        }
    }, [width])
    //code for open signin then close signup
    // const [modal, setModal] = useState(false)
    // const toggle = () => setModal(!modal);
    let location = useLocation();
    const [model, setmodel] = useState(false)

    return (
        <>
            <Modal size='lg' isOpen={model} toggle={() => setmodel(!model)}>
                <ModalHeader toggle={() => setmodel(!model)}>
                    <p style={{
                        color: 'green',
                        fontSize: '15px',
                        fontWeight: 'bold',
                    }}> Let's learn, share & inspire each other with our passion for computer engineering. Sign Up now 🤘🏼</p>
                </ModalHeader>
                <ModalBody >
                    <Signup />
                </ModalBody>
            </Modal >

            <div className="image">
                <img src={img2} alt="" className='img img-fluid' style={{
                    width: '100%',
                    zIndex: '0',
                    filter: 'brightness(50%)'
                }} />
                <div className="text" style={{
                    position: 'absolute',
                    top: '40%',
                    left: '30%',
                    transform: 'translate(-50%,-50%)',
                    zIndex: '1',
                    margin: "10px"

                }} >
                    <h1>Computer Engineering</h1>
                    <p>142,765 computer engineers follow this</p>
                </div>
                <div className={`header`} style={{
                    position: 'Fixed',
                    bottom: '10px',
                    right: '10px',
                    zIndex: '1',
                    border: '1px solid black',
                    borderRadius: '50%',
                    background: 'linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)',

                }}>
                    <i className="fa-solid fa-pencil" style={{
                        fontSize: '30px',
                        color: 'white',
                        padding: '10px',
                    }}></i>
                </div>
            </div>
            <div className="container-fluid">
                <nav className={`navbar navbar-expand-sm navbar-light bg-light ${True ? 'd-none' : ""}`}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">All Posts(32)</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/article" ? "active" : ""}`} aria-current="page" to="/article">Article</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/event" ? "active" : ""}`} to="/event">Events</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/education" ? "active" : ""}`} to="/education">Education</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/job" ? "active" : ""}`} to="/job">Jobs</Link>
                                </li>


                            </ul>
                            <div className="d-flex">
                                <div className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle text-black" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-solid fa-pen"></i> Write a Post
                                    </Link>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#">Article</Link></li>
                                        <li><Link className="dropdown-item" to="#">Education</Link></li>

                                        <li><Link className="dropdown-item" to="#">Meet Up</Link></li>
                                        <li><Link className="dropdown-item" to="#">Job</Link></li>
                                    </ul>
                                </div>
                                <button type="button" className={`btn btn-outline-primary ${True ? 'd-none' : ""} `} onClick={() => { setmodel(true); }}>Join Group</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className={`container-fluid  justify-content-between align-items-center ${True ? 'd-flex' : 'd-none'}`}>
                    <div className="col-md-6">
                        <h4>Posts(362)</h4>
                    </div>
                    <div className="col-md-6 d-flex align-items-center border my-2 rounded">
                        <h6 style={{
                            margin: '0px 10px'
                        }}>Filter:</h6>
                        <select className="form-select border-0" aria-label="Default select example">
                            <option selected>All</option>
                            <option value="1">Article</option>
                            <option value="2">Education</option>
                            <option value="3">Meet Up</option>
                            <option value="3">Job</option>
                        </select>

                    </div>
                </div>

            </div>
            <Posts />
        </>
    )
}

export default Body