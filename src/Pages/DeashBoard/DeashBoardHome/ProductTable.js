import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadProductData from '../../../Redux/middlewares/Products/fetchProducts';

import { Link } from 'react-router-dom';
import deleteProductData from '../../../Redux/middlewares/Products/deleteProduct';
const ProductTable = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(loadProductData())
    }, [dispatch])


    let products = useSelector(state => state.products.products);
    const handleDelete = (id) => {
        dispatch(deleteProductData(id))
    }

    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Color
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Category
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Accesories
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Available
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Weight
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map(product =>
                            <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 w-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.title}
                                </th>
                                <td className="py-4 px-6">
                                    Sliver
                                </td>
                                <td className="py-4 px-6">
                                    Laptop
                                </td>
                                <td className="py-4 px-6">
                                    Yes
                                </td>
                                <td className="py-4 px-6">
                                    Yes
                                </td>
                                <td className="py-4 px-6">
                                    {product.price} ৳
                                </td>
                                <td className="py-4 px-6">
                                    3.0 lb.
                                </td>
                                <td className="flex items-center py-4 px-6 space-x-3">


                                    <Link to={`/dashboard/update-product-form/${product._id}`}>
                                        <button className='  dark:hover:bg-slate-500 dark:hover:text-slate-300 py-1 px-3 rounded-full'>
                                            Edit
                                        </button>
                                    </Link>


                                    <button onClick={() => handleDelete(product._id)} className="  dark:hover:bg-slate-500 dark:hover:text-red-300 py-1 px-3 rounded-full text-red-500">Remove</button>
                                </td>
                            </tr>

                        )}




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ProductTable;