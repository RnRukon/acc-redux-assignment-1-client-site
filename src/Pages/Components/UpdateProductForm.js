import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { RxCrossCircled } from 'react-icons/rx'

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import singleProductData from '../../Redux/middlewares/Products/singleProduct';
import updateProductData from '../../Redux/middlewares/Products/updateProduct';

import { handleShowImage } from '../../hooks/handleImageShow';
import Google from "../../Image/google.gif"




const UpdateProductForm = () => {
    const [image, setImage] = useState(null)
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()

    const { id } = useParams()


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const singleFetchProduct = () => {
        dispatch(singleProductData(id))
    }
    useEffect(() => {
        singleFetchProduct()
    }, [dispatch])

    const product = useSelector(state => state.products.singleProduct)


    const onSubmit = (data) => {

        dispatch(updateProductData(data, product, singleFetchProduct, reset))
    };


    const handleSetImage = () => {
        if (product?.images?.imageURL) {
            return image || product?.images?.imageURL;
        } else if (image) {
            return image
        } else {
            return Google
        }
    }
    return (
        <div>

            {
                id &&
                <div className='  d-flex justify-content-center align-items-lg-center   '>

                    <div>
                        <div className=' flex justify-end '>

                            <button onClick={() => window.history.back()}
                                className=' p-2 rounded-full z-50' style={{ marginBottom: -39, marginRight: -8 }}>
                                <RxCrossCircled className=' text-red-500' size={30} />
                            </button>

                        </div>
                        <div className=' bg-image  bg-slate-700 rounded-lg shadow  shadow-slate-50 hover:shadow-sm-light'>


                            <img src={handleSetImage()} style={{ height: 200, width: "100%", objectFit: "fill" }} alt='...' />





                            <div className=' p-4 '>
                                <h1 className=' text-lg'>Update Product Form</h1>
                                <div>

                                    {product._id ?
                                        (<form onSubmit={handleSubmit(onSubmit)} className='form-outline'>

                                            <span style={{ display: 'flex' }}>
                                                <input className='form-control w-25' id="fileInput" type="file"
                                                    placeholder='Photo'
                                                    accept="image/gif, image/jpeg, image/png, image/webp"
                                                    {...register("image")}
                                                    onChange={(e) => setImage(handleShowImage(e))}
                                                /> <span>Choose image</span>
                                            </span>

                                            <br />
                                            <input className=' w-full h-8 px-3  rounded-full dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3 py-3' id="titleInput" type="text"
                                                placeholder='Title'
                                                defaultValue={product.title}
                                                {...register("title")} />
                                            <br />
                                            <input className=' w-full h-8 px-3  rounded-full dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3 py-3' id="priceInput" type="number"
                                                placeholder='Price'
                                                defaultValue={product.price}
                                                {...register("price")} />
                                            <br />
                                            <textarea className=' w-full h-8 px-3  rounded dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3 ' id="descriptionInput" type="text"
                                                placeholder='Description'
                                                defaultValue={product.description}
                                                {...register("description")} />
                                            <br />

                                            <div className=' flex justify-end pt-4'>
                                                <button type='submit' className=' border border-spacing-1 hover:bg-slate-500  shadow-slate-100 shadow  rounded-full p-1 w-25 m-1'>Submit</button>
                                            </div>
                                        </form>) :
                                        (<div style={{ height: 100, display: 'flex', alignItems: 'center' }}>
                                            <span className="spinner-border text-info" role="status" />
                                            <span> {' '} Loading</span>
                                        </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default UpdateProductForm;