import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { RxCrossCircled } from 'react-icons/rx'
import { useDispatch } from 'react-redux';
import addProductData from '../../Redux/middlewares/Products/addProducts';
import { handleShowImage } from '../../hooks/handleImageShow';
import Google from "../../Image/google.gif"


function AddProductForm() {
    const dispatch = useDispatch();
    const [image, setImage] = useState(Google)



    const { register, handleSubmit, reset } = useForm();



    const onSubmit = async (data) => {
        dispatch(addProductData(data, reset))
        setImage(Google)
    };

    return (
        <div>
            <div className='  d-flex justify-content-center align-items-lg-center '>


                <div>
                    <div className=' flex justify-end '>

                        <button onClick={() => window.history.back()}
                            className=' p-2 rounded-full z-50' style={{ marginBottom: -39, marginRight: -8 }}>
                            <RxCrossCircled className=' text-red-500' size={30} />
                        </button>

                    </div>
                    <div className=' bg-image  bg-slate-700 rounded-lg shadow  shadow-slate-50 hover:shadow-sm-light'>
                        <div rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <img src={image}
                                style={{ height: 200, width: "100%", objectFit: "fill" }}
                                alt='...' />
                           

                        </div>
                        <div className=' p-5'>
                            <h1 className=' text-lg pt-2'>Add Product Form</h1>
                            <div>

                                <form onSubmit={handleSubmit(onSubmit)} className='form-outline'>

                                    <input id="fileInput" type="file"
                                        placeholder='Photo'
                                        accept="image/gif, image/jpeg, image/png, image/webp"
                                        {...register("image")}

                                        onChange={(e) => setImage(handleShowImage(e))}

                                    />

                                    <br />
                                    <input className=' w-full h-8 px-3  rounded-full dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3 py-3' id="titleInput" type="text"
                                        placeholder='Title'
                                        {...register("title")} />
                                    <br />
                                    <input className=' w-full h-8 px-3  rounded-full dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3 py-3' id="priceInput" type="number"
                                        placeholder='Price'
                                        {...register("price")} />
                                    <br />

                                    <input className=' w-full h-8 px-3  rounded-full dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3 py-3' id="stockInput" type="number"
                                        placeholder='Stock'
                                        {...register("stock")} />
                                    <br />
                                    <textarea className=' w-full h-8 px-3  rounded dark:bg-slate-300 text-black text-sm border-0 focus:ring-5 outline-none mt-3  ' id="descriptionInput" type="text"
                                        placeholder='Description'
                                        {...register("description")} />
                                    <br />
                                    <button type='submit' className=' btn-primary  rounded p-1 w-25 m-1'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductForm

