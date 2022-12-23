import { loadProduct } from "../../Actions/Action";


const loadProductData = () => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch("https://acc-resux-assignment-one.onrender.com/products");
            const data = await res.json();

            if (data.data.length) {
                dispatch(loadProduct(data.data));
            }
        } catch (error) {
            console.log(error)
        }
    };
};

export default loadProductData;
