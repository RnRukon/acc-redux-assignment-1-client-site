import "./Css/Navigation.css"
import 'rsuite/dist/rsuite.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Components/Routers/Router";

function App() {
  return (
    <div >
      
      <RouterProvider router={router} />
      

    </div>
  );
}

export default App;
