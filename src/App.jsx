import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Summary from "./components/Summary.jsx";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/summary/:id",
    element: <Summary />,
    loader: async ({ params }) => {
      return axios.get(`https://api.tvmaze.com/shows/${params.id}`);
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
