import React from 'react'
// import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <div className="app">
      {/* <RouterProvider router={appRouter} /> */}
    <Header />
    <Routes>
    <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
          <Route path="/*" element={<Error />} />
    </Routes>
    {/* <Outlet /> */}
  </div>
  </Router>
  )
}

export default App

// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter,  Outlet, RouterProvider } from "react-router-dom";


// const App = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Outlet />
      
//     </div>
//   );
// };
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/restaurants/:resId",
//         element: <RestaurantMenu />,
//       },
//     ],
//     errorElement: <Error />,
//   },
// ]);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);
