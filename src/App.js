import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import "./App.css";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import Contact from "./components/Contact/Contact";
import AboutPage from "./pages/About";
import LearnMore from "./components/LearnMore/LearnMore";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "learn",
        element: <LearnMore />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
