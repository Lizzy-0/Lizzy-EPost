import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Root from "./pages/RootLayout";
import SignIn from "./pages/SignInPage";
import PostCode from "./pages/PostcodePage";
import TrackItem from "./pages/TrackerPage";
import ReturnItem from "./pages/ReturnPage";
import ClickAndDrop from "./pages/ClickAndDropPage";
import SignUp from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "home",
        element: <Home />,
      },

      {
        path: "postcode",
        element: <PostCode />,
      },
      {
        path: "track-item",
        element: <TrackItem />,
      },
      {
        path: "return",
        element: <ReturnItem />,
      },
      {
        path: "click-and-drop",
        element: <ClickAndDrop />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
