import React from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
from 'mdb-react-ui-kit';

const Login = () => {
    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor: 'lightgray'}}>
                <MDBCard className='m-5' style={{ maxWidth: '600px',boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.207)' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Login</h2>
                        <MDBInput wrapperClass='mb-4' placeholder='Email' size='lg' id='form1' type='text' />
                        <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='form3' type='password' />
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Remember password' />
                        </div>
                        <button className='mb-4 w-100' 
                            style={{
                            backgroundColor: 'gray', 
                            color: 'white',
                            padding: '10px', 
                            borderRadius: '10px', 
                            border: 'none' ,
                        }}>Register</button>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default Login;
