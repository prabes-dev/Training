import Home from "./pages/Home";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Dimension from "./pages/Dimension";
import EventHandle from "./pages/EventHandle";
import Exchange from "./pages/Exchange";
import Login from "./pages/Login";
import PropsT from "./pages/PropsT";
import Render from "./pages/Render";
import RootLayout from "./Layout/RootLayout";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index element={<Home />} />
        <Route path="dimension" element={<Dimension />} />
        <Route path="eventhandle" element={<EventHandle />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="login" element={<Login />} />
        <Route path="props" element={<PropsT />} />
        <Route path="render" element={<Render />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
