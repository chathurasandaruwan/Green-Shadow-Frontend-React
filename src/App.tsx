import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./component/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Crop} from "./pages/Crop.tsx";
import {Equipment} from "./pages/Equipment.tsx";
import {Field} from "./pages/Field.tsx";
import {Staff} from "./pages/Staff.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";
import {Log} from "./pages/Log.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/crop', element : <Crop/>},
                { path : '/field', element : <Field/>},
                { path : '/staff', element : <Staff/>},
                { path : '/vehicle', element : <Vehicle/>},
                { path : '/log', element : <Log/>},
                { path : '/equipment', element : <Equipment/>}
            ]
        },
    ])
  return (
    <>
        <RouterProvider router={routes} />
    </>
  )
}

export default App
