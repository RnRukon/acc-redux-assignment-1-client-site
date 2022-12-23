import {
  createBrowserRouter,
} from "react-router-dom";
import AllProducts from "../../AllProducts";
import Dashboard from "../../DeashBoard/Dashboard";
import DeashBoardAbout from "../../DeashBoard/DeashBoardHome/DeashBoardAbout";
import DeashBoardHome from "../../DeashBoard/DeashBoardHome/DeashBoardHome";
import ProductTable from "../../DeashBoard/DeashBoardHome/ProductTable";
import Home from "../../Home";
import SingleProduct from "../../SingleProduct/SingleProduct";
import AddProductForm from "../AddProductForm";
import UpdateProductForm from "../UpdateProductForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "singleProduct/:id",
    element: <SingleProduct />,
  },

  {
    path: "updateProductFrom/:id",
    element: <UpdateProductForm />,
  },

  {
    path: "all-products",
    element: <AllProducts />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DeashBoardHome />
      },
      {
        path: "update-product-form/:id",
        element: <UpdateProductForm />
      },
      {
        path: "add-product-form",
        element: <AddProductForm />
      },
      {
        path: 'about',
        element: <DeashBoardAbout />
      }
      ,
      {
        path: 'products',
        element: <ProductTable />
      }

    ]
  }
]);