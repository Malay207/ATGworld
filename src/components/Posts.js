import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import img1 from '../images/Rectangle 5.png'
import img2 from '../images/Rectangle 3.png'
import img3 from '../images/Rectangle 3 (1).png'
import img6 from '../images/Rectangle 3 (2).png'
import img7 from '../images/Rectangle 3 (3).png'
import img4 from '../images/Rectangle 5 (1).png'
import img5 from '../images/Rectangle 5 (2).png'

const Posts = () => {
    const [width, setwidth] = useState(window.innerWidth)
    const [True, setTrue] = useState(false)
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
        <div>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className={`${True ? 'col-12' : 'col-8'}`}>
                        <div className="card mb-3">
                            <img src={img1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">✍️ Article</h5>
                                <div className='d-flex justify-content-between'>
                                    <h4 className="card-title">What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                                    <div className="nav-item dropdown">
                                        <Link className=" dropdown-toggle text-black" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </Link>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                            <li><Link className="dropdown-item" to="#">Report</Link></li>
                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>

                                </div>
                                <p className="card-text">
                                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                </p>
                                <div className='d-flex justify-content-between'>
                                    <div className="user d-flex align-items-center">
                                        <img src={img3} className="rounded-circle me-3" alt="..." />
                                        <h6>Sarthak Kamra</h6>


                                    </div>
                                    <div className="icon d-flex justify-content-between">
                                        <i className="fa-solid fa-eye me-3">144,432</i>
                                        <i className="fa-solid fa-share-nodes"></i>

                                    </div>
                                </div>
                                {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
                            </div>
                        </div>
                        <div className="card mb-3">
                            <img src={img5} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">🔬️ Education</h5>
                                <div className='d-flex justify-content-between'>
                                    <h4 className="card-title">Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                                    <div className="nav-item dropdown">
                                        <Link className=" dropdown-toggle text-black" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </Link>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                            <li><Link className="dropdown-item" to="#">Report</Link></li>
                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>

                                </div>
                                <p className="card-text">
                                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                                </p>
                                <div className='d-flex justify-content-between'>
                                    <div className="user d-flex align-items-center">
                                        <img src={img2} className="rounded-circle me-3" alt="..." />
                                        <h6>Sarha West</h6>


                                    </div>
                                    <div className="icon d-flex justify-content-between">
                                        <i className="fa-solid fa-eye me-3">1.4k views</i>
                                        <i className="fa-solid fa-share-nodes"></i>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <img src={img4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">🗓️ Meetup</h5>
                                <div className='d-flex justify-content-between'>
                                    <h4 className="card-title">Finance & Investment Elite Social Mixer @Lujiazui</h4>
                                    <div className="nav-item dropdown">
                                        <Link className=" dropdown-toggle text-black" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </Link>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                            <li><Link className="dropdown-item" to="#">Report</Link></li>
                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>

                                </div>
                                <p className="card-text">
                                    <i className="fa-solid fa-calendar-days"> </i> Fri, 12 Oct, 2018
                                    <i className="fa-solid fa-location-pin ms-5"> </i> Ahmedabad, India

                                </p>
                                <Link to="#" className="btn w-100 text-orange border border-secondary my-3">Visit Website</Link>
                                <div className='d-flex justify-content-between'>
                                    <div className="user d-flex align-items-center">
                                        <img src={img6} className="rounded-circle me-3" alt="..." />
                                        <h6>Ronal Jones</h6>


                                    </div>
                                    <div className="icon d-flex justify-content-between">
                                        <i className="fa-solid fa-eye me-3">1.4k views</i>
                                        <i className="fa-solid fa-share-nodes"></i>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">💼️ Job</h5>
                                <div className='d-flex justify-content-between'>
                                    <h4 className="card-title">Software Developer</h4>
                                    <div className="nav-item dropdown">
                                        <Link className=" dropdown-toggle text-black" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </Link>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                            <li><Link className="dropdown-item" to="#">Report</Link></li>
                                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>

                                </div>
                                <p className="card-text">
                                    💼️ Innovaccer Analytics Private Ltd.
                                    <i className="fa-solid fa-location-pin ms-5"> </i> Noida, India

                                </p>
                                <Link to="#" className="btn w-100 text-green border border-secondary my-3">Apply on Timesjobs</Link>
                                <div className='d-flex justify-content-between'>
                                    <div className="user d-flex align-items-center">
                                        <img src={img7} className="rounded-circle me-3" alt="..." />
                                        <h6>Joseph Gray</h6>


                                    </div>
                                    <div className="icon d-flex justify-content-between">
                                        <i className="fa-solid fa-eye me-3">1.4k views</i>
                                        <i className="fa-solid fa-share-nodes"></i>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className={` location  col-4`}>
                        <div className="input-group mb-3 d-flex align-items-center">
                            <i className="fa-solid fa-location-dot" style={{

                                zIndex: '1'
                            }}></i>
                            <input type="text" className="form-control blur" placeholder="Lacation" style={{
                                paddingLeft: '30px',
                                border: 'none',
                                borderBottomStyle: 'solid',
                            }} aria-label="Location" aria-describedby="button-addon2" />
                            <i className="fa-solid fa-pen" style={{
                                top: '10px',
                                right: '10px',
                                zIndex: '1'
                            }}></i>

                        </div>
                        <div id="emailHelp" class="form-text">Your location will help us serve better and personalised experiences .</div>
                    </div>

                </div>

            </div>
        </div>




    )
}

export default Posts