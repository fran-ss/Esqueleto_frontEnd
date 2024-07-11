import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
const routes = createBrowserRouter([
    {
       path:"/" ,
       element:<Home/>
    },
    {
        path: "detail/:id",
        element:<Detail/>
    }
])
export default function Routes(){
    return(
        <RouterProvider router={routes}/>
    )
}