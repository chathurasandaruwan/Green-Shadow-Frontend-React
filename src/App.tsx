import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./component/RootLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";

function App() {
    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/', element : <Dashboard/>},
                { path : '/', element : <Dashboard/>},
                { path : '/', element : <Dashboard/>},
                { path : '/', element : <Dashboard/>},
                { path : '/', element : <Dashboard/>},
                { path : '/', element : <Dashboard/>}
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
