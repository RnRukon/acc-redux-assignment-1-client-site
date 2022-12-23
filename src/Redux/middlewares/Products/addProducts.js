import axios from "axios";
import { addProduct } from "../../Actions/Action"


const addProductData = (data, reset) => {
    return async (dispatch, getState) => {
        try {
            const newData = {
                title: data.title,
                description: data.description,
                price: data.price,
                stock: data.stock
            }
            const formData = new FormData();
            formData.append("image", data?.image[0]);
            formData.append("product", JSON.stringify(newData))


            const res = await axios.post('https://acc-resux-assignment-one.onrender.com/products', formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    body: formData
                }
            )

            if (res.status === 200) {
                dispatch(
                    addProduct(res.data.result)
                );
                alert("Add data success")
                reset()
            }

        } catch (error) {
            alert("Bad request😨😨")
            reset()

        }
    }
}

export default addProductData;