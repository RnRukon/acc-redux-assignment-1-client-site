import axios from "axios"



const updateProductData = (data, product, singleFetchProduct, reset) => {

    const newData = {
        title: data.title,
        description: data.description,
        price: data.price,
        oldFileName: product?.images?.filename

    }

    let formData = new FormData();
    if (data.image.length === 0) {

        formData.append("product", JSON.stringify(newData))
    } else {

        formData.append("image", data?.image[0]);
        formData.append("product", JSON.stringify(newData))
    }





    return async (dispatch, getState) => {
        try {
            const res = await axios.patch(`https://acc-resux-assignment-one.onrender.com/product/${product._id}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }

            );
            console.log(res)
            if (res.status === 200) {

                singleFetchProduct()

                alert("Data is Updated Success")
            }
        } catch (error) {
            alert(error.message)
        }
    }
}

export default updateProductData;