import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { registerUser } from "../../managers/AuthManager"
import "./Auth.css"
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const email = useRef()
    const city = useRef()
    const state = useRef()
    const address = useRef()
    const postalCode = useRef()
    const phone = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "password": password.current.value,
                "email": email.current.value,
                "city": city.current.value,
                "state": state.current.value,
                "phone": phone.current.value,
                "postalCode": postalCode.current.value,
                "address": address.current.value
            }

            registerUser(newUser)
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lu_token", res.token)
                        navigate("/watches")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <MDBContainer fluid className='my-5'>

            <MDBRow className='g-0 align-items-center'>
                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 shadow-5 text-center'>

                            <h2 className="fw-bold mb-5">Sign up now</h2>

                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' />

                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol col='6'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100 rounded-4 shadow-4"
                        alt="" fluid />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

    // return (
    //     <main style={{ textAlign: "center" }}>

    //         <dialog className="dialog dialog--password" ref={passwordDialog}>
    //             <div>Passwords do not match</div>
    //             <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
    //         </dialog>

    //         <form className="form--login" onSubmit={handleRegister}>
    //             <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
    //             <fieldset>
    //                 <label htmlFor="firstName"> First Name </label>
    //                 <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="lastName"> Last Name </label>
    //                 <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputUsername">Username</label>
    //                 <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputEmail"> Email </label>
    //                 <input ref={email} type="email" name="email" className="form-control" placeholder="Email" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputEmail"> City </label>
    //                 <input ref={city} type="text" name="city" className="form-control" placeholder="City" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputEmail"> State </label>
    //                 <input ref={state} type="text" name="state" className="form-control" placeholder="State" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputEmail"> Phone </label>
    //                 <input ref={phone} type="text" name="phone" className="form-control" placeholder="Phone" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputEmail"> Postal Code </label>
    //                 <input ref={postalCode} type="text" name="postal code" className="form-control" placeholder="Posatl Code" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputEmail"> Address </label>
    //                 <input ref={address} type="text" name="address" className="form-control" placeholder="Address" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="inputPassword"> Password </label>
    //                 <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
    //             </fieldset>
    //             <fieldset>
    //                 <label htmlFor="verifyPassword"> Verify Password </label>
    //                 <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
    //             </fieldset>

    //             <fieldset style={{
    //                 textAlign: "center"
    //             }}>
    //                 <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
    //             </fieldset>
    //         </form>
    //         <section className="link--register">
    //             Already registered? <Link to="/login">Login</Link>
    //         </section>
    //     </main>
    // )
// }