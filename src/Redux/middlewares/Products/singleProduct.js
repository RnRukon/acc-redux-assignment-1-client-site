import axios from "axios"
import { singleProduct } from "../../Actions/Action";



const singleProductData = (id) => {


    return async (dispatch, getState) => {
        try {
            const res = await axios.get(`https://acc-resux-assignment-one.onrender.com/single-product/${id}`);
            if (res.status === 200) {
                dispatch(singleProduct(res.data.data))
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default singleProductData;