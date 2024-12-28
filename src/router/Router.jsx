import {createBrowserRouter} from "react-router-dom";
import EntryLayout from "../layouts/EntryLayout.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <EntryLayout></EntryLayout>,
        children:[
            {
                path: "/",
                element: <App></App>
            }
        ]
    }
])

export default router;