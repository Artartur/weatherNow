import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dallol from "../screens/Dallol";
import Fairbanks from "../screens/Fairbanks";
import Home from "../screens/Home";
import London from "../screens/London";
import Recife from "../screens/Recife";
import Vancouver from "../screens/Vancouver";
import Yakutsk from "../screens/Yakutsk";

const routes = createBrowserRouter([
  { element: <Home />, path: "/" },
  { element: <Dallol />, path: "/Dallol" },
  { element: <Fairbanks />, path: "/Fairbanks" },
  { element: <London />, path: "/London" },
  { element: <Recife />, path: "/Recife" },
  { element: <Vancouver />, path: "/Vancouver" },
  { element: <Yakutsk />, path: "/Yakutsk" },
]);

export default function DefinitionRoute() {
  return <RouterProvider router={routes} />;
}
