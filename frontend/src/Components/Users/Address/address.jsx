import React, { useState } from 'react';
import './address.css'
import checkout from '../../../Images/checkout-spc-address-banner.png'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod, saveShippingAddress } from '../../../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Address() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn;

    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress } = cart;



    const [name, setName] = useState(shippingAddress && shippingAddress.name);
    const [mobile, setMobile] = useState(shippingAddress && shippingAddress.mobile);
    const [pinCode, setPinCode] = useState(shippingAddress && shippingAddress.pinCode);
    const [address, setAddress] = useState(shippingAddress && shippingAddress.address);
    const [place, setPlace] = useState(shippingAddress && shippingAddress.place);
    const [landmark, setLandmark] = useState(shippingAddress && shippingAddress.landmark);
    const [city, setCity] = useState(shippingAddress && shippingAddress.city);
    const [addressType, setAddressType] = useState(shippingAddress && shippingAddress.addressType);
    const [country, setCountry] = useState('India');
    const [state, setState] = useState(shippingAddress && shippingAddress.state);


    const [paymentMethod, setPaymentMethod] = useState('PayPal');


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ name, mobile, pinCode, address, place, landmark, city, addressType, state, country }))
        setPaymentMethod('PayPal')
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/payment')
    }

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=shipping')
        }
    })


    return (
        <div className='addressSection'>
            <div className="addressContainer">
                <div className="addressImageDiv">
                    <img src={checkout} alt="" className='addressImage' />
                </div>
                <div className="addressTitleTextDiv">
                    <p className='SelectDeliveryAddressText'>Select a delivery address</p>
                </div>
                <hr />
                {shippingAddress.name &&
                    <div className="existingShippingAddressSection">
                        <p className="existingShippingAddressName">{name}</p>
                        <p className="existingShippingAddressAddress">{address}</p>
                        <p className="existingShippingAddressPlace">{place}</p>
                        <p className="existingShippingAddress"><span className="existingShippingAddressCity">{city}, </span><span className="existingShippingAddressState">{state} </span><span className="existingShippingAddressPinCode">{pinCode}</span></p>
                        <p className="existingShippingAddressCountry">{country}</p>
                        <p className="existingShippingAddInstructions">Add delivery instructions</p>
                        <div className="existingShippingBtnDiv">
                            <button className='existingShippingBtn' onClick={submitHandler}>Deliver to this address</button>
                        </div>
                        <hr />
                    </div>
                }
                <form onSubmit={submitHandler}>
                    <div className="newAddressDiv">
                        <div className="newAddressFormContainer">
                            <p className='addNewAddressText'>Add a new address</p>

                            <div className="formDivTop">
                                <label htmlFor="country" className='newAddressLabel labelCountry'>Country/Region</label>
                                <select name="country" id="" className='selectCountry' value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option value="India" className='countryOption'>India</option>
                                </select>
                            </div>
                            <div className="formDiv">
                                <label htmlFor="name" className='newAddressLabel labelName'>Full name</label>
                                <input required type="text" className='inputSpace inputName' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="number" className='newAddressLabel labelNumber'>Mobile number</label>
                                <input required type="tel" className='inputSpace inputNumber' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="pincode" className='newAddressLabel labelPincode'>Pincode</label>
                                <input required type="num" className='inputSpace inputPincode' name='pincode' value={pinCode} placeholder="6 digits [0-9] PIN code" onChange={(e) => setPinCode(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="flat" className='newAddressLabel labelFlat'>Flat, House no., Building, Company, Apartment</label>
                                <input required type="text" className='inputSpace inputFlat' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="area" className='newAddressLabel labelArea'>Area, Street, Sector, Village</label>
                                <input required type="text" className='inputSpace inputArea' name='place' value={place} onChange={(e) => setPlace(e.target.value)} />
                            </div>


                        </div>
                    </div>

                    <div className="newAddressLocationDiv">
                        <div className="newAddressFormContainerRight">
                            <div className="formDiv">
                                <label htmlFor="landmark" className='newAddressLabel labelLandmark'>Landmark</label>
                                <input required type="text" className='inputSpace inputLandmark' value={landmark} placeholder='E.g. near Apollo hospital' name='landmark' onChange={(e) => setLandmark(e.target.value)} />
                            </div>
                            <div className="formDiv inputCityDiv">
                                <label htmlFor="city" className='newAddressLabel labelCity'>Town/City</label>
                                <br />
                                <input required type="text" className='inputCity' name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className='selectStateDiv'>
                                <label htmlFor="state" className='newAddressLabel labelState'>State</label>
                                <br />
                                <select name="state" id="" className='selectState' value={state} onChange={(e) => setState(e.target.value)}>
                                    <option value="">Choose a state</option>
                                    <option value="Kerala">Kerala</option>
                                </select>
                            </div>
                            <br />
                            <div className='formDivTop'>
                                <input type="checkbox" className='addressCheckbox' name='defaultAddress' />
                                <label htmlFor="addressDefault" className='newAddressLabel labelDefaultAddress'>Make this my default address</label>
                            </div>

                            <div className="deliveryInstructionDiv">
                                <p className='deliveryInstructionText'>Add delivery instructions</p>
                            </div>
                            <div className='deliveryInstructionContentDiv'>
                                <p className='deliveryInstructionContentText'>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                            </div>
                            <div className='formDiv'>
                                <label htmlFor="type" className='newAddressLabel labelType'>Address Type</label>
                                <select name="addressType" id="selectAddress" className='selectAddressType' value={addressType} onChange={(e) => setAddressType(e.target.value)}>
                                    <option value="">Select an Address Type</option>
                                    <option value="Home (7 am - 9 pm delivery)">Home (7 am - 9 pm delivery)</option>
                                    <option value="Office/Commercial (10 am - 6 pm delivery)">Office/Commercial (10 am - 6 pm delivery)</option>
                                </select>
                            </div>
                            <div className='useAddressBtnDiv'>
                                <button className='useAddressBtn' type='submit'>Use this address</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Address;
