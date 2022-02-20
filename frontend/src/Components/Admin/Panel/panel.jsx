import React from 'react'
import './panel.css'
// import userLogo from '../../../Images/adminUsers.png'
// import orderLogo from '../../../Images/adminOrders.png'
// import productLogo from '../../../Images/adminProducts.png'
import { useContext } from 'react'
import { AuthContext } from '../../../store/FirebaseContext'
import { useEffect } from 'react'
import { useNavigate } from '../../../../node_modules/react-router/index'
import dashOrderImg from '../../../Images/Box.png'
import dashUserImg from '../../../Images/users.png'
import dashProductImg from '../../../Images/products.png'






function AdminPanel() {

    const navigate = useNavigate()


    const AdminSignIn = () => {

        const { user } = useContext(AuthContext)
        if (user) {
            localStorage.setItem('adminInfo', JSON.stringify(user));
        }
    }

    AdminSignIn()

    useEffect(() => {
        const user = localStorage.getItem('adminInfo')
        if (!user) {
            navigate('/admin')
        }
    }, [navigate])



    return (
        <div className='adminPanelSectionContainer'>
            <section className='adminPanelOverviewSection'>
                <div className="adminPanelOverviewContainer">
                    <div className="adminPanelOverviewTitleDiv">
                        <p className="adminPanelOverviewTitle">Amazon Dashboard</p>
                    </div>
                    <div className="adminPanelOverviewSubTitleDiv">
                        <p className="adminPanelOverviewSubTitleText"><span className="adminPanelOverviewSubDashboardTitle">Dashboard</span>{'>'}<span className="adminPanelOverviewSubAmazonDashboardTitle">Amazon Dashboard</span></p>
                    </div>
                    <div className="adminPanelOverviewBoxContainer">
                        <div className="adminPanelOverviewOrdersBoxContainerDiv">
                            <div className="adminPanelOverviewOrdersBoxDiv">
                                <div className="adminPanelOverviewOrdersImgDivContainer">
                                    <img className='adminPanelOverviewOrdersImg' src={dashOrderImg} alt="" />
                                </div>
                                <div className="adminPanelOverviewOrdersTextDivContainer">
                                    <div className="adminPanelOverviewOrdersTextDiv">
                                        <p className="adminPanelOverviewOrdersText">Total Orders</p>
                                    </div>
                                    <div className="adminPanelOverviewOrdersSubTextDiv">
                                        <p className="adminPanelOverviewOrdersSubText">Track, return, or manage orders</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="adminPanelOverviewUsersBoxContainerDiv">
                            <div className="adminPanelOverviewUsersBoxDiv">
                                <div className="adminPanelOverviewUsersImgDivContainer">
                                    <img className='adminPanelOverviewUsersImg' src={dashUserImg} alt="" />
                                </div>
                                <div className="adminPanelOverviewUsersTextDivContainer">
                                    <div className="adminPanelOverviewUsersTextDiv">
                                        <p className="adminPanelOverviewUsersText">Users</p>
                                    </div>
                                    <div className="adminPanelOverviewUsersSubTextDiv">
                                        <p className="adminPanelOverviewUsersSubText">View all users, or manage users</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="adminPanelOverviewProductsBoxContainerDiv">
                            <div className="adminPanelOverviewProductsBoxDiv">
                                <div className="adminPanelOverviewProductsImgDivContainer">
                                    <img className='adminPanelOverviewProductsImg' src={dashProductImg} alt="" />
                                </div>
                                <div className="adminPanelOverviewProductsTextDivContainer">
                                    <div className="adminPanelOverviewProductsTextDiv">
                                        <p className="adminPanelOverviewProductsText">Products</p>
                                    </div>
                                    <div className="adminPanelOverviewProductsSubTextDiv">
                                        <p className="adminPanelOverviewProductsSubText">Add, edit, or manage products</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section className='adminPanelDepartmentSection'>
                <div className="adminPanelDepartmentContainer adminPanelDepartment">
                    <p className='adminPanelDepartmentContainerText'>Products</p>
                    <img className='adminPanelDepartmentContainerImage' src={productLogo} alt="" />
                    <button className='btn btn-primary btnProducts'>Manage Products</button>
                </div>
                <div className="adminPanelDepartmentContainer adminPanelDepartmentUsers">
                    <p className='adminPanelDepartmentContainerText'>Users</p>
                    <img className='adminPanelDepartmentContainerImage' src={userLogo} alt="" />
                    <button className='btn btn-primary btnUsers'>Manage Users</button>
                </div>
                <div className="adminPanelDepartmentContainer adminPanelDepartmentOrders">
                    <p className='adminPanelDepartmentContainerText'>Orders</p>
                    <img className='adminPanelDepartmentContainerImage' src={orderLogo} alt="" />
                    <button className='btn btn-primary btnOrders'>Manage Orders</button>
                </div>

            </section> */}
        </div>
    )
}

export default AdminPanel