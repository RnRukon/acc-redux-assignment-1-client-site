import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import {
    MDBContainer,
    MDBBtnGroup,
    MDBBtn,
} from 'mdb-react-ui-kit';
import loadProductData from '../../../Redux/middlewares/Products/fetchProducts';
import { Link } from 'react-router-dom';
import { sortByFirstLastUpload } from '../../../Redux/Actions/Action';
import { SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD, SORT_BY_RESET } from '../../../Redux/Types/ProductType';




const Products = () => {
    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleFetch = () => dispatch(loadProductData());

    useEffect(() => {
        handleFetch()
    }, [dispatch, handleFetch]);

    let products = useSelector(state => state.products.products)
    const sort = useSelector(state => state.products.sort)



   
    const handleSortByLastUpload = () => {
        dispatch(sortByFirstLastUpload(SORT_BY_LAST_UPLOAD))
    }
    const handleSortByFirstUpload = () => {
        dispatch(sortByFirstLastUpload(SORT_BY_FIRST_UPLOAD))
    }
    const handleSortByReset = () => {
        dispatch(sortByFirstLastUpload(SORT_BY_RESET))
    }




        ;

    return (


        <MDBContainer className='mt-5 ' >
          
            <br />
            <div className=' d-flex justify-content-end pb-5 mt-5'>
                <MDBBtnGroup aria-label='Basic example'>
                    <MDBBtn onClick={handleSortByLastUpload} className=' btn-info'>Sort by last upload</MDBBtn>
                    <MDBBtn onClick={handleSortByFirstUpload} className='btn-primary'>Sort by first upload</MDBBtn>
                    <MDBBtn onClick={handleSortByReset} className=' btn-danger'>Reset</MDBBtn>
                </MDBBtnGroup>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
                {
                    products
                        // eslint-disable-next-line array-callback-return
                        .sort((a, b) => {
                            a = new Date(a.createdAt);
                            b = new Date(b.createdAt);

                            if (sort === SORT_BY_LAST_UPLOAD) {

                                return (b - a)
                            } if (sort === SORT_BY_FIRST_UPLOAD) {
                                return (a - b)
                            } if (sort === SORT_BY_RESET) {
                                handleFetch()
                            }
                        }

                        ).sort((a, b) => {
                            return b.viewCount - a.viewCount
                        }).map((product, index) =>
                            <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col justify-between dark:text-slate-50' >

                                <div>
                                    <div>
                                        <img
                                            style={{ height: 200, width: "100%", objectFit: "fill" }}
                                            src={product.images.imageURL}
                                            alt='...'
                                            position='top'
                                        />
                                    </div>
                                    <div>
                                        <h5>
                                            {product.title}

                                        </h5>
                                        <p>
                                            {product.description.slice(0, 100)}...
                                        </p>

                                    </div>

                                </div>


                                <div >
                                    <hr />
                                    <div className='d-flex justify-content-between dark:text-slate-100'>

                                        <small className=''>
                                            Prices: {product.price}৳
                                        </small>
                                        <small className='position-right'>
                                            Stock: {product.stock}
                                        </small>
                                        <small className=' position-right'>
                                            View: {product?.viewCount ? product?.viewCount : "0"}
                                        </small>
                                    </div>
                                    <hr />
                                    <div className=' d-flex justify-content-between p-0 py-2'>

                                        <Link to={`singleProduct/${product._id}`}>
                                            <button className='btn-primary rounded-5 px-4'> Details</button>
                                        </Link>

                                    </div>
                                </div>


                            </div>)
                }
            </div>
        </MDBContainer>

    )
}

export default Products