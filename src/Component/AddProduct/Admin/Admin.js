import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import './admin.css'
import DeleteProduct from './../DeleteProduct/DeleteProduct';
import { Link } from 'react-router-dom';
const Admin = () => {
    return (
        <div className='admin-wrapper'>
            <div class="sidenav d-flex align-items-center">
                <div>
                    <Link to="/manageProduct">Manage Product</Link>
                    <Link to="/addProduct">Add Product</Link>
                </div>
            </div>
            <div className="">
                <DeleteProduct/>
            </div>
        </div>
    );
};

export default Admin;