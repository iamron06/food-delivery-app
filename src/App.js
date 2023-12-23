import React, { Suspense, lazy } from 'react'
// import ReactDOM from "react-dom/client";
import Header from "./components/Header"
// import Body from "./components/Body"
import About from "./components/About";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shimmer from './components/Shimmer';

// Lazy is given by react it takes a callback and a function named import and inside the import function we will give the path of the component.
// const Componentname = lazy (()=> import("./components/Contact")) --->  then we don't need to import contact then
// Now we will have to use suspense in routing in element part 
const Body = lazy(()=> import("./components/Body"))
const App =() => {
  const Contact = lazy(()=> import("./components/Contact"))
  return (
    <Router>
    <div className="app">
      {/* <RouterProvider router={appRouter} /> */}
    <Header />
    <Routes>
    {/* <Route path="/" element={<Body />} /> */}
    <Route path="/" element={<Suspense fallback={<Shimmer />}><Body /></Suspense>} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/contact" element={<Suspense fallback={<Shimmer />}><Contact /></Suspense>} />

          
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
