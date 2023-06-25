import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import WeeklyView from "./pages/WeeklyView/WeeklyView";
import HabitProvider from "./contexts/habitContext";

function App() {

  // creating routes for different pages
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/weekly-view", element: <WeeklyView /> },
  ]);

  return (
    <>
      <HabitProvider>
        <RouterProvider router={router} />
      </HabitProvider>
    </>
  );
}

export default App;
