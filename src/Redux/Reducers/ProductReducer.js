import { ADD_PRODUCT, DELETE_PRODUCT, LOAD_PRODUCT, SINGLE_PRODUCT,  SORT_BY_FIRST_LAST_UPLOAD, UPDATE_PRODUCT } from "../Types/ProductType";

const initialState = {
    products: [],
    singleProduct: {},
    sort: ''
}





const productReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_PRODUCT:

            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case DELETE_PRODUCT:

            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            };
        case LOAD_PRODUCT:

            return {
                ...state,
                products: action.payload
            }
        case SINGLE_PRODUCT:

            return {
                ...state,
                singleProduct: action.payload
            }
        case UPDATE_PRODUCT:

            return {
                ...state,
                products: state.products.filter(product => product._id === action.payload)
            }
        case SORT_BY_FIRST_LAST_UPLOAD:


            return {
                ...state,
                sort: action.payload

            }

        


        default:
            return state;
    }
}

export default productReducer;