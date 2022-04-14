import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }



    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone};
        console.log(shipping);
    }


    return (
        <div className='form-container'>
            <div style={{ margin: "20px" }}>
                <h2 className='form-title'>Shipping Info</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="Name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="Address" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name="Phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Checkout" />
                </form>

                {/* <div className='icon'>
                    <div className='icon-setup'>
                        <p><FcGoogle></FcGoogle></p>
                    </div>
                    <div>
                        <p className='icon-text'>
                            Continue with Google
                        </p>
                    </div>
                </div> */}

            </div>
        </div>
    );
};

export default Shipment;