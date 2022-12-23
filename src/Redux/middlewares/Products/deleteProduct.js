import axios from "axios";
import { deleteProduct } from "../../Actions/Action";


const deleteProductData = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.delete(`https://acc-resux-assignment-one.onrender.com/delete-product/${id}`);
            console.log(res)
            if (res.status === 200) {
                alert("Delete Success")
                dispatch(deleteProduct(id))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default deleteProductData;