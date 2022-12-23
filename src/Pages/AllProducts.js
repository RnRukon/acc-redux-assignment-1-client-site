import React from 'react';
import Products from './Components/Products/Products';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const AllProducts = () => {
    return (
        <div>
            <NavigationBar />
            <Products />
            <Footer />
        </div>
    );
};

export default AllProducts;