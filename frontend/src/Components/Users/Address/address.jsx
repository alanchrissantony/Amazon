import React from 'react';
import './address.css'
import checkout from '../../../Images/checkout-spc-address-banner.png'

function address() {
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
                <div className="newAddressDiv">
                    <div className="newAddressFormContainer">
                        <p className='addNewAddressText'>Add a new address</p>
                        <form>
                            <div className="formDivTop">
                                <label htmlFor="country" className='newAddressLabel labelCountry'>Country/Region</label>
                                <select name="country" id="" className='selectCountry'>
                                    <option value="" className='countryOption'>India</option>
                                    <option value="">China</option>
                                    <option value="">America</option>
                                    <option value="">England</option>
                                </select>
                            </div>
                            <div className="formDiv">
                                <label htmlFor="name" className='newAddressLabel labelName'>Full name</label>
                                <input type="text" className='inputSpace inputName' name='name'/>
                            </div>
                            <div className="formDiv">
                                <label htmlFor="number" className='newAddressLabel labelNumber'>Mobile number</label>
                                <input type="tel" className='inputSpace inputNumber' name='mobile'/>
                            </div>
                            <div className="formDiv">
                                <label htmlFor="pincode" className='newAddressLabel labelPincode' placeholder='6 digits [0-9] PIN code'>Pincode</label>
                                <input type="num" className='inputSpace inputPincode' name='pincode' />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="flat" className='newAddressLabel labelFlat'>Flat, House no., Building, Company, Apartment</label>
                                <input type="text" className='inputSpace inputFlat' name='address' />
                            </div>
                            <div className="formDiv">
                                <label htmlFor="area" className='newAddressLabel labelArea'>Area, Street, Sector, Village</label>
                                <input type="text" className='inputSpace inputArea' name='place'/>
                            </div>
                            <div className="formDiv">
                                <label htmlFor="landmark" className='newAddressLabel labelLandmark' placeholder='E.g. near Apollo hospital'>Landmark</label>
                                <input type="text" className='inputSpace inputLandmark' name='landmark'/>
                            </div>
                            <div className="formDiv inputCityDiv">
                                <label htmlFor="city" className='newAddressLabel labelCity'>Town/City</label>
                                <br />
                                <input type="text" className='inputCity'  name='city'/>
                            </div>
                            <div className='selectStateDiv'>
                                <label htmlFor="state" className='newAddressLabel labelState'>State</label>
                                <br />
                                <select name="state" id="" className='selectState' >
                                    <option value="">Choose a state</option>
                                    <option value="">Kerala</option>
                                    <option value="">Tamil Nadu</option>
                                    <option value="">Delhi</option>
                                </select>
                            </div>
                            <br />
                            <div className='formDivTop'>
                                <input type="checkbox" className='addressCheckbox' name='defaultAddress'/>
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
                                <select name="addressType" id="" className='selectAddressType'>
                                    <option value="">Select an Address Type</option>
                                    <option value="">Home (7 am - 9 pm delivery)</option>
                                    <option value="">Office/Commercial (10 am - 6 pm delivery)</option>
                                </select>
                            </div>
                            <div className='useAddressBtnDiv'>
                                <button className='useAddressBtn'>Use this address</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="newAddressLocationDiv">

                </div>
            </div>
        </div>
    );
}

export default address;
