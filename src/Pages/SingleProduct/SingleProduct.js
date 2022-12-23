import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBContainer,
} from 'mdb-react-ui-kit';
import singleProductData from '../../Redux/middlewares/Products/singleProduct';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';

const SingleProduct = () => {

    const dispatch = useDispatch();


    const { id } = useParams();

    useEffect(() => {
        dispatch(singleProductData(id))
    }, [dispatch, id])

    const product = useSelector(state => state.products.singleProduct)


    return (
        <>
            <NavigationBar />
            <MDBContainer >

                <MDBCard >
                    <MDBCardImage
                        style={{ width: "100%", objectFit: "fill" }}
                        src={product?.images?.imageURL}
                        alt='...'
                        position='top'
                    />
                    <MDBCardBody>
                        <MDBCardTitle>
                            {product.title}

                        </MDBCardTitle>
                        <MDBCardText>
                            {product.description}
                        </MDBCardText>
                        <MDBCardText className='d-flex justify-content-between'>
                            <small className='text-muted'>
                                Prices: {product.price}
                            </small>
                            <small className='text-muted position-right'>
                                Stock: {product.stock}
                            </small>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className=' d-flex justify-content-between'>


                        <button
                            className='btn btn-danger'>
                            Delete
                        </button>

                    </MDBCardFooter>
                </MDBCard>




            </MDBContainer>
            <Footer />
        </>
    );
};

export default SingleProduct;