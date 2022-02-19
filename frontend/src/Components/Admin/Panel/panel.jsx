import React from 'react'
import './panel.css'
import userLogo from '../../../Images/adminUsers.png'
import orderLogo from '../../../Images/adminOrders.png'
import productLogo from '../../../Images/adminProducts.png'
import { useContext } from 'react'
import { AuthContext } from '../../../store/FirebaseContext'
import { useEffect } from 'react'
import { useNavigate } from '../../../../node_modules/react-router/index'






function AdminPanel() {

    const navigate = useNavigate()


    const AdminSignIn =  ()=>{
        
        const {user} =  useContext(AuthContext)
        if(user){
            localStorage.setItem('adminInfo', JSON.stringify(user));
        }
    }
    
    AdminSignIn()

    useEffect(() => {
        const user = localStorage.getItem('adminInfo')
        if(!user){
            navigate('/admin')
        }
    }, [navigate])
    


    return (
        <div>
            <section className='adminPanelSection'>
                <div className="adminPanelContainer adminPanelDepartment">
                    <p className='adminPanelContainerText'>Products</p>
                    <img className='adminPanelContainerImage' src={productLogo} alt="" />
                    <button className='btn btn-primary btnProducts'>Manage Products</button>
                </div>
                <div className="adminPanelContainer adminPanelUsers">
                    <p className='adminPanelContainerText'>Users</p>
                    <img className='adminPanelContainerImage' src={userLogo} alt="" />
                    <button className='btn btn-primary btnUsers'>Manage Users</button>
                </div>
                <div className="adminPanelContainer adminPanelOrders">
                    <p className='adminPanelContainerText'>Orders</p>
                    <img className='adminPanelContainerImage' src={orderLogo} alt="" />
                    <button className='btn btn-primary btnOrders'>Manage Orders</button>
                </div>
            </section>
        </div>
    )
}

export default AdminPanel