import React from 'react';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <div>
            <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>
                    
                    <div>
                        <a href='https://www.facebook.com/' target='_blank' className='me-4 text-reset'>
                            facebook
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' className='me-4 text-reset'>
                            instagram
                        </a>
                        <a href='https://www.twitter.com/' target='_blank' className='me-4 text-reset'>
                            twitter
                        </a>
                        <a href='https://www.github.com/' target='_blank' className='me-4 text-reset'>
                            github
                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    My Shop
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>



                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <Link to='/' className='text-reset'>
                                        Home
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/products' className='text-reset'>
                                        Products
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/login' className='text-reset'>
                                        Login
                                    </Link>
                                </p>
                                <p>
                                    <Link to='/signup' className='text-reset'>
                                        Sign up
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    Baku, AZ
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    haci.mehdixann@gmail.com
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2022 My Shop
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;
